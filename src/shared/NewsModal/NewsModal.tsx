import React, { useCallback, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { useHistory } from "react-router-dom";
import { Button } from "../Button/Button";
import { Flex } from "../Flex/Flex";
import { Input } from "../Input/Input";
import "./index.scss";

interface IProps {
  isOpen: boolean;
  toggle(): void;
  loading: boolean;
  callback(newsPayload?: any, type?: string): void;
  newsToEdit?: any;
}
const NewsModal: React.FC<IProps> = ({ loading, callback, isOpen, toggle, newsToEdit }) => {
  const modalElement = document.getElementById("modal-root");
  const close = useCallback(() => toggle(), [toggle]);


  const [title, setTitle] = useState<string>("");
  const [subtitle, setSubtitle] = useState<string>("");
  const [body, setBody] = useState<string>("");
  const [score, setScore] = useState<string>("");
  const [imageUrl, setImageUrl] = useState<string>("");

  let history = useHistory();


  const handleEscape = useCallback(
    (event) => {
      if (event.keyCode === 27) close();
    },
    [close]
  );

  const handleSave = () => {
    if (newsToEdit) {
      //EDICION
      const newsPayload = {
        title,
        subtitle,
        body,
        score,
        imagePicture: imageUrl,
        userId: newsToEdit.userDto.userId,
        newsId: newsToEdit.newsId
      }
      callback(newsPayload, 'PUT')
    } else {
      //NUEVO
      let userLogged = localStorage.getItem("token");
      if (userLogged) {
        let userInfo = JSON.parse(userLogged);
        const newsPayload = {
          title,
          subtitle,
          body,
          score,
          imagePicture: imageUrl,
          userId: userInfo.userId
        }
        callback(newsPayload, 'POST')
      } else {
        history.push('/login');
      }
    }
  }

  useEffect(() => {
    if (isOpen) document.addEventListener("keydown", handleEscape, false);

    if(newsToEdit) {
      setTitle(newsToEdit.title);
      setSubtitle(newsToEdit.subtitle);
      setBody(newsToEdit.body);
      setScore(newsToEdit.score);
      setImageUrl(newsToEdit.imagePicture)
    }

    return () => {
      document.removeEventListener("keydown", handleEscape, false);
    };
  }, [handleEscape, isOpen, newsToEdit]);

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <Flex
      justifyContent="center"
      alignItems="center"
      className="modal-container"
    >
      <Flex direction="column" className="card">
        <h3>Formulario Noticias</h3>
        <p className="major">{newsToEdit ? 'Editar' : 'Agregar'} Noticia</p>

        <div className="field">
          <Input
            name="title"
            placeholder="Título"
            type="text"
            value={title}
            required={true}
            width='286px'
            isSecure={true}
            onChange={(e) => {
              console.log(e.target.value)
              setTitle(e.target.value);
            }}
          />
        </div>
        <div className="field">
          <Input
            name="subtitle"
            placeholder="Subtítulo"
            type="text"
            value={subtitle}
            required={true}
            width='286px'
            isSecure={true}
            onChange={(e) => {
              setSubtitle(e.target.value);
            }}
          />
        </div>
        <div className="body-field">
          <Input
            name="body"
            placeholder="Cuerpo de la noticia"
            type="textarea"
            value={body}
            required={true}
            width='286px'
            isSecure={true}
            onChange={(e) => {
              setBody(e.target.value);
            }}
            onChangeTextArea={(e) => {
              setBody(e.target.value);
            }}
          />
        </div>
        <div className="field">
          <Input
            name="score"
            placeholder="Puntaje"
            type="text"
            value={score}
            required={true}
            width='286px'
            isSecure={true}
            onChange={(e) => {
              setScore(e.target.value);
            }}
          />
        </div>
        <div className="field">
          <Input
            name="url"
            placeholder="Url de la imagen"
            type="textarea"
            value={imageUrl}
            required={true}
            width='286px'
            isSecure={true}
            onChange={(e) => {
              setImageUrl(e.target.value);
            }}
            onChangeTextArea={(e) => {
              setImageUrl(e.target.value);
            }}
            rows={3}
          />
        </div>

        <Flex
          className="btn-container"
          justifyContent="flex-end"
          alignItems="center"
        >
          <Button
            loading={false}
            text="Cancelar"
            type="button"
            onClick={close}
          />
          <Button
            onClick={handleSave}
            loading={loading}
            text={newsToEdit ? 'Editar' : 'Agregar'}
            type="button"
          />
        </Flex>
      </Flex>
    </Flex>,
    modalElement as Element
  );
};

export default NewsModal;
