import React, { useEffect, useState } from "react";
import { NewsService } from "../../../../services";
import { Button } from "../../../../shared/Button/Button";
import { Flex } from "../../../../shared/Flex/Flex";
import Modal from "../../../../shared/Modal/Modal";
import { Spinner } from "../../../../shared/Spinner/Spinner";
import { NewsArticle } from "../components/articles/NewsArticle";
import { NewsCalendar } from "../components/calendar/NewsCalendar";
import "./index.scss";

export const NewsPage: React.FC = () => {
  const [isOpen, setModalVisible] = useState<boolean>(false);
  const [loadingNews, setLoadingNews] = useState(false);

  const [newsList, setNewsList] = useState([]);

  useEffect(() => {
    getNews();
  }, [])

  const apiRequest = () => {
    console.log("Enviando petición");
  };

  const getNews = () => {
    setLoadingNews(true);
    NewsService.getList().then((response) => {
      if (response && response.data) {
        setNewsList(response.data);
      }
      setLoadingNews(false);
    }).catch((error) => {
      console.log(error)
      setLoadingNews(false);
    })
  }

  const toggle = () => {
    setModalVisible((p) => !p);
  };
  return (
    <>
      {!loadingNews && (
        <div className="news-page-container">
          <Flex
            className="button-container"
            justifyContent="flex-end"
            alignItems="center"
          >
            <Button
              width="108px"
              className="button"
              loading={false}
              text="Nuevo"
              type="button"
            />
             <Button
              width="108px"
              className="button"
              loading={false}
              text="Editar"
              type="button"
            />
            <Button
              width="108px"
              className="button"
              loading={false}
              text="Eliminar"
              type="button"
              onClick={toggle}
            />
          </Flex>

          <Flex justifyContent="space-between" className="news-section-container">
            <Flex className="news-list-container" direction="column">
              <Flex>
                <h3 className="title">Publicaciones</h3>
              </Flex>
              {newsList.length && (
                <>
                  {newsList.map((value: any) => {
                    return <NewsArticle title={value.title} subtitle={value.subtitle} urlImage={value.imagePicture} />
                  })}
                </>
              )}
            </Flex>
            <NewsCalendar />
          </Flex>
        </div>
      )}
      {loadingNews && (
        <Flex
          justifyContent="center"
          alignItems="center">
          <Spinner color={"#000000"} width={"50px"} height={"50px"} />
        </Flex>
      )}
      <Modal
        callback={apiRequest}
        isOpen={isOpen}
        loading={false}
        toggle={toggle}
      />
    </>
  );
};
