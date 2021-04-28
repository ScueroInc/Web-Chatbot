import React from "react";
import { Flex } from "../../../shared/Flex/Flex";
import { RegisterCard } from "../components/Card/RegisterCard";
import "./index.scss";

export const RegisterPage: React.FC = () => {
    return (
    <Flex
      alignItems={"center"}
      justifyContent={"center"}
      className="login-container-page"
    >
        <RegisterCard/>

    </Flex>
    );

};