# TiendaApp - E-commerce con React y JSON Server

Una aplicación de e-commerce moderna construida con React, styled-components y un backend mock con JSON Server.

## 🚀 Inicio Rápido

### Instalación de dependencias

```bash
npm install
```

### Ejecutar la aplicación

#### Opción 1: Ejecutar todo junto (recomendado)

```bash
npm run start:all
```

Esto ejecutará tanto el servidor backend (puerto 3000) como el frontend (puerto 5173) simultáneamente.

#### Opción 2: Ejecutar por separado

**Terminal 1 - Backend:**

```bash
npm run server
```

**Terminal 2 - Frontend:**

```bash
npm run dev
```

## 🔐 Usuarios de Prueba

El servidor incluye usuarios de prueba que puedes usar para login:

| Usuario | Contraseña | Rol   |
| ------- | ---------- | ----- |
| admin   | admin123   | admin |
| user1   | user123    | user  |
| test    | test123    | user  |

## 📡 API Endpoints

### Autenticación

- `POST /register` - Registro de nuevos usuarios
- `POST /login` - Inicio de sesión

### Productos

- `GET /products` - Obtener productos (requiere autenticación)

### Autenticación con Bearer Token

Para las rutas protegidas, incluye el token en el header:

```
Authorization: Bearer <tu-token>
```

## 🛠️ Tecnologías Utilizadas

### Frontend

- **React 19** - Biblioteca principal
- **Styled Components** - Estilos CSS-in-JS
- **React Router** - Navegación
- **Axios** - Cliente HTTP
- **Context API** - Gestión de estado

## 📝 Scripts Disponibles

- `npm run dev` - Ejecutar frontend en modo desarrollo
- `npm run server` - Ejecutar servidor backend
- `npm run start:all` - Ejecutar frontend y backend juntos
