import { Route, Switch, useRouteMatch } from "react-router";
import { DashboardPage } from "../../modules/Admin/Dashboard/pages/DashboardPage";
import { HomePage } from "../../modules/Admin/Home/pages/HomePage";
import { NewsPage } from "../../modules/Admin/News/pages/NewsPage";
import { QuestionnairePage } from "../../modules/Admin/Questionnaire/pages/QuestionnairePage";

export const AdminRouter: React.FC = () => {
  let { path } = useRouteMatch();

  return (
    <>
      <Switch>
        <Route exact path={`${path}`}>
          <HomePage />
        </Route>
        <Route exact path={`${path}noticias`}>
          <NewsPage />
        </Route>
        <Route exact path={`${path}cuestionarios`}>
          <QuestionnairePage />
        </Route>
        <Route exact path={`${path}dashboard`}>
          <DashboardPage />
        </Route>
      </Switch>
    </>
  );
};
