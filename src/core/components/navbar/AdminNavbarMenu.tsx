import { useLocation, useRouteMatch } from "react-router";
import { Link } from "react-router-dom";
import { Flex } from "../../../shared/Flex/Flex";
import { AdminRouterEnum } from "../../constant/admin-router.enum";

export const AdminNavbarMenu: React.FC = () => {
  const { url } = useRouteMatch();
  const { pathname } = useLocation();

  const isActiveLink = (adminRoute: AdminRouterEnum): string => {
    return pathname === adminRoute ? "item-link active" : "item-link";
  };
  return (
    <>
      <Link to={`${url}`}>
        <Flex
          alignItems="center"
          justifyContent="center"
          className={isActiveLink(AdminRouterEnum.HOME)}
        >
          <p>Home</p>
        </Flex>
      </Link>
      <Link to={`${url}noticias`}>
        <Flex
          alignItems="center"
          justifyContent="center"
          className={isActiveLink(AdminRouterEnum.NEWS)}
        >
          <p>Noticias</p>
        </Flex>
      </Link>
      <Link to={`${url}cuestionarios`}>
        <Flex
          alignItems="center"
          justifyContent="center"
          className={isActiveLink(AdminRouterEnum.QUESTIONNARIES)}
        >
          <p>Cuestionario </p>
        </Flex>
      </Link>
      <Link to={`${url}dashboard`}>
        <Flex
          alignItems="center"
          justifyContent="center"
          className={isActiveLink(AdminRouterEnum.DASHBOARD)}
        >
          <p>Dashboard</p>
        </Flex>
      </Link>
      <Link onClick={() => { localStorage.removeItem('token'); }} to={`${url}login`}>
        <Flex alignItems="center" justifyContent="center" className="item-link">
          <p>Cerrar sesión </p>
        </Flex>
      </Link>
    </>
  );
};
