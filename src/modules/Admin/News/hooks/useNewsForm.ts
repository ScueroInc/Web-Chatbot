import { useState } from "react";
import { HandleInputChangeEvent, HandleTextAreaChangeEvent } from "../../../../core/constant/HandleInputChangeEvent.type";
import { InputProps } from "../../../../shared/Input/Input";
export const useNewsForm = () => {
  const [title, setTitle] = useState<string>("");
  const [subtitle, setSubtitle] = useState<string>("");
  const [body, setBody] = useState<string>("");
  const [score, setScore] = useState<string>("");
  const [imageUrl, setImageUrl] = useState<string>("");

  const handleTitle = (e: HandleInputChangeEvent): void => {
    setTitle(e.target.value);
  };
  const handleSubtitle = (e: HandleInputChangeEvent): void => {
    setSubtitle(e.target.value);
  };
  const handleBody = (e: HandleInputChangeEvent): void => {
    setBody(e.target.value);
  };
  const handleBodyTextArea = (e: HandleTextAreaChangeEvent): void => {
    setBody(e.target.value);
  };
  const handleScore = (e: HandleInputChangeEvent): void => {
    setScore(e.target.value);
  };

  const handleImageUrl = (e: HandleInputChangeEvent): void => {
    setImageUrl(e.target.value);
  };

  const titleProps: InputProps = {
    name: "title",
    onChange: handleTitle,
    placeholder: "Título",
    type: "text",
    value: title,
    required: true,
    width: '286px',
    isSecure: false,
};
  const subtitleProps: InputProps = {
    name: "subtitle",
    onChange: handleSubtitle,
    placeholder: "Subtítulo",
    type: "text",
    value: subtitle,
    required: true,
    width: '286px',
    isSecure: false,
};
  const bodyProps: InputProps = {
    name: "body",
    onChange: handleBody,
    placeholder: "Cuerpo de noticia",
    type: "textarea",
    onChangeTextArea: handleBodyTextArea,
    value: body,
    required: true,
    width: '286px',
    isSecure: false,
};
  const scoreProps: InputProps = {
    name: "score",
    onChange: handleScore,
    placeholder: "Puntaje",
    type: "text",
    value: score,
    required: true,
    width: '286px',
    isSecure: false,
};
  const imageUrlProps: InputProps = {
    name: "imageUrl",
    onChange: handleImageUrl,
    placeholder: "Url de imagen",
    type: "text",
    value: imageUrl,
    required: true,
    width: '286px',
    isSecure: false,
};

  return {titleProps, subtitleProps,bodyProps,scoreProps,imageUrlProps };
};
