import { Flex } from "../../../../../shared/Flex/Flex";
import { Spinner } from "../../../../../shared/Spinner/Spinner";
import "./index.scss";

export const NewsLoadingArticles: React.FC = () => {
  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="center"
      className="news-loading-container"
    >
      <Spinner height={"24px"} width={"24px"} color={"#0D6FF7"} />
      <p className="minor">Cargando artículos</p>
    </Flex>
  );
};
