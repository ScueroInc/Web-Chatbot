import React from "react";
import { Flex } from "../../../../shared/Flex/Flex";
import { RegisterForm } from "../Form/RegisterForm";
import "./index.scss";
export const RegisterCard: React.FC = () => {
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
      <RegisterForm />
    </Flex>
  );
};
