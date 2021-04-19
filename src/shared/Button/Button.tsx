import React from "react";
import { Spinner } from "../Spinner/Spinner";
import "./index.scss";

type typeButton = "button" | "reset" | "submit";
interface IProps {
  text: string;
  onClick?(): void;
  loading: boolean;
  width?: string;
  type: typeButton;
  className?: string;
}
export const Button: React.FC<IProps> = (props) => {
  return (
    <>
      <button
        className={props.className}
        type={props.type}
        disabled={props.loading}
        onClick={props.onClick}
        style={{
          width: props.width || "fit-content",
        }}
      >
        {props.loading && (
          <Spinner color={"#ffffff"} width={"20px"} height={"20px"} />
        )}
        {props.text}
      </button>
    </>
  );
};
