import { AdminNavBar } from "../components/navbar/AdminNavBar";
import { AdminRouter } from "../Router/AdminRouter";

export const AdminLayout: React.FC = () => {
  return (
    <>
      <AdminNavBar />
      <AdminRouter />
    </>
  );
};
