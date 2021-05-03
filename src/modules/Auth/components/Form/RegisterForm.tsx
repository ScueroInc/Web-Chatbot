import React, { useState } from "react";
import { Button } from "../../../../shared/Button/Button";
import { Flex } from "../../../../shared/Flex/Flex";
import { Input } from "../../../../shared/Input/Input";
import { useHistory } from "react-router-dom";
import "./index.scss";
import { RegisterService } from "../../../../services";
import { useRegistrationForm } from "../../hooks/useRegisterForm";

export const RegisterForm: React.FC = () => {
  const {usernameProps,passwordProps,firstNameProps,lastNameProps,emailProps} = useRegistrationForm();
  const [loading, setLoading] = useState(false);
  let history = useHistory();
  return (
    <Flex direction="column" justifyContent="center">
      <form className="login-form">
        <Flex direction="column" alignItems="center" justifyContent="center">
          <div className=" field">
            <Input {...usernameProps} />
          </div>
          <div className=" field">
            <Input {...firstNameProps} />
          </div>
          <div className=" field">
            <Input {...lastNameProps} />
          </div>
          <div className=" field">
            <Input {...emailProps} />
          </div>
          <div className="field">
            <Input {...passwordProps} />
          </div>
          <div className="field">
            <Input {...passwordProps} />
          </div>
          
          <Button
            className="login-button-submit"
            width="280px"
            loading={loading}
            onClick={() => {
              setLoading(true);
              RegisterService.register_admin(usernameProps.value,passwordProps.value,firstNameProps.value,lastNameProps.value,"10/10/2000",emailProps.value,"gender").then((response) => {
                if (response) {
                  alert("Usuario registrado")
                  history.push('/login');
                }
                setLoading(false);
              }).catch((error) => {
                alert("Error en el ingreso de datos")
                console.log(error);
                setLoading(false);
              })
              console.log("le dio")
            }}
            text="Registrarse"
            type="button"
          />
          <Flex justifyContent="center" className="register-terms">
          <p>Al registrarse usted esta aceptando nuestros términos y condiciones </p>
          </Flex>
        </Flex>
      </form>
    </Flex>
  );
};
