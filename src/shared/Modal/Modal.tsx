import React, { useCallback, useEffect } from "react";
import ReactDOM from "react-dom";
import { Button } from "../Button/Button";
import { Flex } from "../Flex/Flex";
import "./index.scss";

interface IProps {
  isOpen: boolean;
  toggle(): void;
  loading: boolean;
  callback(): void;
  toDelete?: number;
}
const Modal: React.FC<IProps> = ({ loading, callback, isOpen, toggle, toDelete }) => {
  const modalElement = document.getElementById("modal-root");

  const close = useCallback(() => toggle(), [toggle]);

  const handleEscape = useCallback(
    (event) => {
      if (event.keyCode === 27) close();
    },
    [close]
  );

  useEffect(() => {
    if (isOpen) document.addEventListener("keydown", handleEscape, false);

    return () => {
      document.removeEventListener("keydown", handleEscape, false);
    };
  }, [handleEscape, isOpen]);

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <Flex
      justifyContent="center"
      alignItems="center"
      className="modal-container"
    >
      <Flex direction="column" className="card">
        <h3>Advertencia</h3>
        <p className="major">¿Estás seguro de eliminar {toDelete && toDelete === 1 ? 'este artículo' : 'estos artículos' }?</p>
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
            onClick={callback}
            loading={loading}
            text="Aceptar"
            type="button"
          />
        </Flex>
      </Flex>
    </Flex>,
    modalElement as Element
  );
};

export default Modal;
