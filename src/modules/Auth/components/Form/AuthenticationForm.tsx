import React, { useState } from "react";
import { Button } from "../../../../shared/Button/Button";
import { Flex } from "../../../../shared/Flex/Flex";
import { Input } from "../../../../shared/Input/Input";
import { useAuthenticationForm } from "../../hooks/useAuthenticatonForm";
import { useHistory } from "react-router-dom";
import { AuthenticationForgotPassword } from "../ForgottPassword/AuthenticationForgotPassword";
import "./index.scss";
import { AuthService } from "../../../../services";

export const AuthenticationForm: React.FC = () => {
  const { emailProps, passwordProps } = useAuthenticationForm();
  const [loading, setLoading] = useState(false);

  let history = useHistory();

  return (
    <Flex direction="column" justifyContent="center">
      <form className="login-form">
        <Flex direction="column" alignItems="center" justifyContent="center">
          <div className=" field">
            <Input {...emailProps} />
          </div>
          <div className="field">
            <Input {...passwordProps} />
          </div>
          {false && (
            <p className="medium login-error">
              El correo o contraseña no válido
            </p>
          )}
          <Button
            className="login-button-submit"
            width="280px"
            loading={loading}
            onClick={() => {
              setLoading(true);
              AuthService.login(emailProps.value, passwordProps.value).then((response) => {
                if (response) {
                  localStorage.setItem("token", JSON.stringify(response.data));
                  history.push('/');
                }
                setLoading(false);
              }).catch((error) => {
                alert("Usuario o contraseña incorrectos")
                console.log(error);
                setLoading(false);
              })
            }}
            text="Ingresar"
            type="button"
          />
        </Flex>
      </form>
      <AuthenticationForgotPassword />
    </Flex>
  );
};
