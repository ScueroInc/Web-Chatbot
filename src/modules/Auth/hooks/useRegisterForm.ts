import { useState } from "react";
import { HandleInputChangeEvent } from "../../../core/constant/HandleInputChangeEvent.type";
import { InputProps } from "../../../shared/Input/Input";
export const useRegistrationForm = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const handleUsername = (e: HandleInputChangeEvent): void => {
    setUsername(e.target.value);
  };
  const handlePassword = (e: HandleInputChangeEvent): void => {
    setPassword(e.target.value);
  };
  const handleFirstName = (e: HandleInputChangeEvent): void => {
    setFirstName(e.target.value);
  };
  const handleLastName = (e: HandleInputChangeEvent): void => {
    setLastName(e.target.value);
  };
  const handleEmail = (e: HandleInputChangeEvent): void => {
    setEmail(e.target.value);
  };

  const usernameProps: InputProps = {
    name: "username",
    onChange: handleUsername,
    placeholder: "Nombre de usuario",
    type: "text",
    value: username,
    required: true,
    width: '286px',
    isSecure: false,
  };
  const passwordProps: InputProps = {
    name: "password",
    onChange: handlePassword,
    placeholder: "Contraseña",
    type: "password",
    value: password,
    width: '286px',
    isSecure: true,
    required: true,
  };
  const firstNameProps: InputProps = {
    name: "firstName",
    onChange: handleFirstName,
    placeholder: "Nombres",
    type: "text",
    value: firstName,
    required: true,
    width: '286px',
    isSecure: false,
  };
  const lastNameProps: InputProps = {
    name: "lastName",
    onChange: handleLastName,
    placeholder: "Apellidos",
    type: "text",
    value: lastName,
    required: true,
    width: '286px',
    isSecure: false,
  };
  const emailProps: InputProps = {
    name: "email",
    onChange: handleEmail,
    placeholder: "Correo Electrónico",
    type: "text",
    value: email,
    required: true,
    width: '286px',
    isSecure: false,
  };


  return {usernameProps,passwordProps,firstNameProps,lastNameProps,emailProps};
};
