import React, { useCallback, useEffect, useState } from "react";
import { Flex } from "../../../shared/Flex/Flex";
import { AdminNavbarMenu } from "./AdminNavbarMenu";
import { AdminNavbarMobile } from "./AdminNavbarMobile";
import "./index.scss";

export const AdminNavBar: React.FC = () => {
  const [windowsWidth, setWindosWidth] = useState<number>(window.innerWidth);

  const memoHeightWrapper = useCallback(() => {
    setWindosWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", memoHeightWrapper);
    return () => {
      window.removeEventListener("resize", memoHeightWrapper);
    };
  }, [memoHeightWrapper]);

  if (windowsWidth <= 768) {
    return <AdminNavbarMobile />;
  }
  return (
    <Flex justifyContent="flex-end" className="admin-navbar-container">
      <AdminNavbarMenu />
    </Flex>
  );
};
