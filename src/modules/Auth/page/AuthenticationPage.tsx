import React from "react";
import { Flex } from "../../../shared/Flex/Flex";
import { AuthenticationCard } from "../components/Card/AuthenticationCard";
import "./index.scss";

export const AuthenticationPage: React.FC = () => {
  return (
    <Flex
      alignItems={"center"}
      justifyContent={"center"}
      className="login-container-page"
    >
      <AuthenticationCard />
    </Flex>
  );
};
