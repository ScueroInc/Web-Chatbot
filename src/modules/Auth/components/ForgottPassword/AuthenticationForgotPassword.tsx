import { Flex } from "../../../../shared/Flex/Flex";
import "./index.scss";

export const AuthenticationForgotPassword: React.FC = () => {
  return (
    <Flex justifyContent="center" className="login-forgot-password">
      <a href="/login">¿Olvidaste tu contraseña</a>
    </Flex>
  );
};
