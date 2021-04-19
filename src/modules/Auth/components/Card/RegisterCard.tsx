import { Flex } from "../../../../shared/Flex/Flex";
import { AuthenticationForm } from "../Form/AuthenticationForm";
import "./index.scss";
export const AuthenticationCard: React.FC = () => {
  return (
    <Flex
      justifyContent={"center"}
      alignItems="center"
      direction={"column"}
      className="login-card-container"
    >
      <h1>Registrarse</h1>
      <p className="major">
        Registrese para tener acceso a las herramientas de administrador de la
        aplicación Chatbot
      </p>
      <AuthenticationForm />
    </Flex>
  );
};
