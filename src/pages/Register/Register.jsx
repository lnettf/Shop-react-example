import axios from "axios";
import { useNavigate } from "react-router";
import { useAuthForm } from "../../hooks/useAuthForm";
import {
  AuthContainer,
  AuthCard,
  AuthTitle,
  AuthForm,
  FormGroup,
  Label,
  Input,
  SubmitButton,
  ErrorMessage,
  LoadingSpinner,
  ButtonContent,
} from "../../components/Auth/Auth.styles";

export const Register = () => {
  const navigate = useNavigate();
  const { form, error, isLoading, handleChange, setFormError, setFormLoading } =
    useAuthForm();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.username || !form.password) {
      setFormError("Todos los campos son obligatorios");
      return;
    }

    try {
      setFormLoading(true);
      await axios.post("http://localhost:3000/register", {
        username: form.username,
        password: form.password,
      });

      navigate("/login");
    } catch (error) {
      setFormError("Error al registrar usuario");
      console.error("Registration error:", error);
    } finally {
      setFormLoading(false);
    }
  };

  return (
    <AuthContainer>
      <AuthCard>
        <AuthTitle>Crear Cuenta</AuthTitle>

        {error && <ErrorMessage>{error}</ErrorMessage>}

        <AuthForm onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="username">Nombre de usuario</Label>
            <Input
              id="username"
              type="text"
              name="username"
              value={form.username}
              onChange={handleChange}
              required
              disabled={isLoading}
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="password">Contraseña</Label>
            <Input
              id="password"
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              required
              disabled={isLoading}
            />
          </FormGroup>

          <SubmitButton type="submit" disabled={isLoading}>
            <ButtonContent>
              {isLoading && <LoadingSpinner />}
              {isLoading ? "Registrando..." : "Crear Cuenta"}
            </ButtonContent>
          </SubmitButton>
        </AuthForm>
      </AuthCard>
    </AuthContainer>
  );
};
