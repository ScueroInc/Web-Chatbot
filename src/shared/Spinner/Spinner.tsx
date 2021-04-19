import React from "react";
import "./index.scss";

interface IProps {
  width: string;
  height: string;
  color: string;
}
export const Spinner: React.FC<IProps> = ({ height, width, color }) => {
  return (
    <div
      style={{ width: width, height: height, borderLeft: `2px solid ${color}` }}
      className="loader"
    ></div>
  );
};
