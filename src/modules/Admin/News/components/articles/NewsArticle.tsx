import { useState } from "react";
import { Checkbox } from "../../../../../shared/Checkbox/Checkbox";
import { Flex } from "../../../../../shared/Flex/Flex";
import "./index.scss";

interface IProps {
  title?: string;
  urlImage?: string;
  subtitle?: string;
}
export const NewsArticle: React.FC<IProps> = ({title,subtitle, urlImage}) => {
  const [isChecked, setChecked] = useState<boolean>(false);

  const onChange = (val: boolean): void => {
    setChecked(val);
  };
  return (
    <>
      <Flex className="news-article-container">
        <Flex className="news-title" direction="column">
          <h3>{title ? title : "TITULO"}</h3>
          <h3>{subtitle ? subtitle : "SUBTITULO"}</h3>
          <h3>19/05/20</h3>
        </Flex>
        <Flex alignItems="center">
          <img
            height="300px"
            width="50px"
            src={urlImage ? urlImage : "https://thumbs.dreamstime.com/b/tropical-paradise-4934272.jpg"}
            alt="we"
          />
          <Checkbox value={isChecked} onChange={onChange} />
        </Flex>
      </Flex>
    </>
  );
};
