import React from "react";
import { Route, Switch } from "react-router";
import { AuthenticationPage } from "../../modules/Auth/page/AuthenticationPage";
import { RegisterPage } from "../../modules/Auth/page/RegisterPage";
import RouterGuard from "../guard/RouterGuard";
import { AdminLayout } from "../Layout/AdminLayout";

export const MainRouter: React.FC = () => {
  return (
    <>
      <Switch>
        <Route exact path="/login" render={() => <AuthenticationPage />} />
        <Route exact path="/registro" render={() => <RegisterPage />} />
        <Route path="/" render={() => (<RouterGuard redirect={"/login"} component={<AdminLayout />} />
          )}
        />
      </Switch>
    </>
  );
};
