import React, { useEffect, useState } from "react";
import { NewsService } from "../../../../services";
import { Button } from "../../../../shared/Button/Button";
import { Flex } from "../../../../shared/Flex/Flex";
import Modal from "../../../../shared/Modal/Modal";
import NewsModal from "../../../../shared/NewsModal/NewsModal";
import { Spinner } from "../../../../shared/Spinner/Spinner";
import { NewsArticle } from "../components/articles/NewsArticle";
import { NewsCalendar } from "../components/calendar/NewsCalendar";
import "./index.scss";

export const NewsPage: React.FC = () => {
  const [isDeleteModalOpen, setDeleteModalVisible] = useState<boolean>(false);
  const [isNewModalOpen, setNewModalVisible] = useState<boolean>(false);
  const [loadingNews, setLoadingNews] = useState(false);
  const [newsList, setNewsList] = useState([]);
  const [newsSelected, setNewsSelected] = useState<number[]>([]);

  useEffect(() => {
    getNews();
  }, [])

  const deleteRequest = () => {
    toggleDeleteModal();
    if (newsSelected.length !== 0) {
      setLoadingNews(true);
      NewsService.deleteNews(newsSelected).then((response) => {
        if (response && response.data) {
          getNews();
        }
      }).catch((error) => {
        console.log(error)
        setLoadingNews(false);
      })
    }
  };

  const newsRequest = (newsPayload?: any, type?: string) => {
    toggleNewModal();
    setLoadingNews(true);
    if (type === 'POST') {
      NewsService.insertNews(newsPayload).then((response) => {
        if (response && response.data) {
          getNews();
        }
      }).catch((error) => {
        console.log(error)
        setLoadingNews(false);
      })
    } else {
      NewsService.updateNews(newsPayload).then((response) => {
        if (response && response.data) {
          getNews();
        }
      }).catch((error) => {
        console.log(error)
        setLoadingNews(false);
      })
    }
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

  const handleSelect = (val: boolean, newsId: any) => {
    if (val) {
      let isSelected = newsSelected.filter((val) => { return val === newsId }).length;
      if (isSelected === 0) {
        setNewsSelected([...newsSelected, newsId]);
      }
    } else {
      let newsTemp = [...newsSelected];
      const index = newsTemp.indexOf(newsId);
      if (index > -1) {
        newsTemp.splice(index, 1)
        setNewsSelected(newsTemp);
      }
    }
  }

  useEffect(() => {
    console.log(newsSelected)
  }, [newsSelected])

  const toggleDeleteModal = () => {
    setDeleteModalVisible((p) => !p);
  };

  const toggleNewModal = () => {
    setNewModalVisible((p) => !p);
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
              onClick={toggleNewModal}
            />
            <Button
              width="108px"
              className="button"
              loading={false}
              text="Editar"
              type="button"
              onClick={toggleNewModal}
              disabled={newsSelected.length !== 1}
            />
            <Button
              width="108px"
              className="button"
              loading={false}
              text="Eliminar"
              type="button"
              disabled={newsSelected.length === 0}
              onClick={toggleDeleteModal}
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
                    return <NewsArticle
                      key={value.newsId}
                      title={value.title}
                      subtitle={value.subtitle}
                      urlImage={value.imagePicture}
                      selected={value.selected}
                      onselect={(val) => {
                        value.selected = val;
                        handleSelect(val, value.newsId);
                      }} />
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
        callback={deleteRequest}
        isOpen={isDeleteModalOpen}
        loading={false}
        toggle={toggleDeleteModal}
        toDelete={newsSelected.length}
      />

      <NewsModal
        callback={newsRequest}
        isOpen={isNewModalOpen}
        loading={false}
        toggle={toggleNewModal}
        newsToEdit={newsSelected.length === 1 ? newsList.filter((value: any) => { return value.newsId === newsSelected[0] })[0] : null}
      />

    </>
  );
};
