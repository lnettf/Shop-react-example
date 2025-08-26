import jsonServer from "json-server";
import jwt from "jsonwebtoken";

const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

const SECRET_KEY = "your-secret-key";

server.use(middlewares);
server.use(jsonServer.bodyParser);

// Helper functions
const createToken = (user) => {
  return jwt.sign(
    {
      userId: user.id,
      username: user.username,
      role: user.role,
    },
    SECRET_KEY,
    { expiresIn: "24h" }
  );
};

const verifyToken = (token) => {
  try {
    return jwt.verify(token, SECRET_KEY);
  } catch (err) {
    return null;
  }
};

// Middleware para verificar autenticación
const authenticate = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ error: "Token requerido" });
  }

  const token = authHeader.split(" ")[1];
  const decoded = verifyToken(token);

  if (!decoded) {
    return res.status(401).json({ error: "Token inválido" });
  }

  req.user = decoded;
  next();
};

// Ruta de registro
server.post("/register", (req, res) => {
  const { username, password, email } = req.body;

  if (!username || !password) {
    return res
      .status(400)
      .json({ error: "Username y password son requeridos" });
  }

  const db = router.db;
  const users = db.get("users").value();

  // Verificar si el usuario ya existe
  const existingUser = users.find((user) => user.username === username);
  if (existingUser) {
    return res.status(400).json({ error: "El usuario ya existe" });
  }

  // Crear nuevo usuario
  const newUser = {
    id: users.length + 1,
    username,
    password, // En producción esto debería estar hasheado
    email: email || `${username}@tiendaapp.com`,
    role: "user",
  };

  db.get("users").push(newUser).write();

  res.status(201).json({
    message: "Usuario creado exitosamente",
    user: { id: newUser.id, username: newUser.username, email: newUser.email },
  });
});

// Ruta de login
server.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res
      .status(400)
      .json({ error: "Username y password son requeridos" });
  }

  const db = router.db;
  const users = db.get("users").value();

  // Buscar usuario
  const user = users.find(
    (u) => u.username === username && u.password === password
  );

  if (!user) {
    return res.status(401).json({ error: "Credenciales inválidas" });
  }

  // Crear token
  const token = createToken(user);

  res.json({
    message: "Login exitoso",
    token,
    user: {
      id: user.id,
      username: user.username,
      email: user.email,
      role: user.role,
    },
  });
});

// Ruta protegida para obtener productos (Dashboard)
server.get("/products", authenticate, (req, res) => {
  const db = router.db;
  const products = db.get("products").value();

  res.json(products);
});

// Usar las rutas por defecto de json-server para otras operaciones
server.use(router);

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`🚀 Servidor JSON ejecutándose en http://localhost:${PORT}`);
  console.log("📊 Rutas disponibles:");
  console.log("  POST /register - Registro de usuarios");
  console.log("  POST /login - Login de usuarios");
  console.log("  GET /products - Productos (requiere auth)");
  console.log("");
  console.log("👤 Usuarios de prueba:");
  console.log("  admin / admin123");
  console.log("  user1 / user123");
  console.log("  test / test123");
});
