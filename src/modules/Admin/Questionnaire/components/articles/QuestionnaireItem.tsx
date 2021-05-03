import { Checkbox } from "../../../../../shared/Checkbox/Checkbox";
import { Flex } from "../../../../../shared/Flex/Flex";
import "./index.scss";

interface IProps {
  name?: string;
  selected?: boolean;
  onselect: (val:boolean)=>void;
}
export const QuestionnaireItem: React.FC<IProps> = ({name,selected=false,onselect}) => {

  return (
    <>
      <Flex className="news-article-container">
        <Flex className="news-title" direction="column">
          <h3>{name ? name : "Nombre_Cuestionario"}</h3>
          
        </Flex>
        <Flex alignItems="center">
          
          <Checkbox value={selected} onChange={onselect} />
        </Flex>
      </Flex>
    </>
  );
};
