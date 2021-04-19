import { Flex } from "../../../../shared/Flex/Flex";
import DashboardImage from "../../../../assets/HomePage/Dashboard.jpg";
import NewsImage from "../../../../assets/HomePage/News.png";
import QuestionnaryImage from "../../../../assets/HomePage/Questionnary.jpg";
import "./index.scss";
import { HomeCard } from "../components/Card/HomeCard";

export const HomePage: React.FC = () => {
  return (
    <Flex
      alignItems="center"
      justifyContent="space-between"
      className="home-page-container"
    >
      <HomeCard
        image={NewsImage}
        title="Noticias"
        description="Sección para poder ingresar, editar y publicar las noticias sobre la gestión de residuos sólidos y reciclaje"
        redirect="/noticias"
      />
      <HomeCard
        image={QuestionnaryImage}
        title="Cuestionarios"
        description="Sección para poder ingresar, editar y publicar los cuestionarios sobre la gestión de residuos sólidos y reciclaje"
        redirect="/cuestionarios"
      />
      <HomeCard
        image={DashboardImage}
        title="Dashboard"
        description="Sección para poder visualizar los indicadores que miden la usabilidad de la aplicación, la satisfacción del cliente y otros datos"
        redirect="/dashboard"
      />
    </Flex>
  );
};
