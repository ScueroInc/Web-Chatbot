import { useState } from "react";
import { HandleInputChangeEvent } from "../../../core/constant/HandleInputChangeEvent.type";
import { InputProps } from "../../../shared/Input/Input";
export const useAuthenticationForm = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleEmail = (e: HandleInputChangeEvent): void => {
    setEmail(e.target.value);
  };

  const handlePassword = (e: HandleInputChangeEvent): void => {
    setPassword(e.target.value);
  };

  const emailProps: InputProps = {
    name: "email",
    onChange: handleEmail,
    placeholder: "Email",
    type: "text",
    value: email,
    required: true,
    width: '286px',
    isSecure: false,
};

const passwordProps: InputProps = {
    name: "password",
    onChange: handlePassword,
    placeholder: "Password",
    type: "password",
    value: password,
    width: '286px',
    isSecure: true,
    required: true,
  };

  return { emailProps, passwordProps };
};
