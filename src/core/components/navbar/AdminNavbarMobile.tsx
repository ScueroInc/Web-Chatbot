import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { Flex } from "../../../shared/Flex/Flex";
import { HamburguerIcon } from "../../../shared/Icon/Hamburguer/HamburguerIcon";
import { AdminNavbarMenu } from "./AdminNavbarMenu";
import "./index.scss";

export const AdminNavbarMobile: React.FC = () => {
  const [isVisibleMenu, setVisibleMenu] = useState<boolean>(false);
  const { pathname } = useLocation();

  const toggle = (): void => {
    setVisibleMenu((p) => !p);
  };

  useEffect(() => {
    isVisibleMenu
      ? (document.getElementsByTagName("body")[0].style.overflow = "hidden")
      : (document.getElementsByTagName("body")[0].style.overflow = "initial");
  }, [isVisibleMenu]);

  useEffect(() => {
    setVisibleMenu(false);
  }, [pathname]);

  return (
    <Flex className="admin-mobile-navbar-container">
      <div onClick={toggle} className="hamburguer-icon">
        <HamburguerIcon />
      </div>
      {isVisibleMenu && (
        <div className="admin-mobile-menu-container">
          <div onClick={toggle} className="hamburguer-icon">
            <HamburguerIcon />
          </div>
          <AdminNavbarMenu />
        </div>
      )}
    </Flex>
  );
};
