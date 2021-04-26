import React from "react";
import "./index.scss";

export interface InputProps {
  value: string;
  onChange(e: React.ChangeEvent<HTMLInputElement>): void;
  onChangeTextArea?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder: string;
  isSecure?: boolean;
  required?: boolean;
  name: string;
  error?: boolean;
  type: string;
  width?: string;
  iconSearch?: boolean;
  color?: string;
  rows?: number;
}

export const Input: React.FC<InputProps> = (props) => {
  return (
    <div>
      {props.type !== 'textarea' && (
        <input
          style={{ width: props.width || "100%" }}
          className={`${props.error ? "error" : ""} `}
          type={props.type}
          onChange={props.onChange}
          placeholder={props.placeholder}
          value={props.value}
          name={props.name}
          required={props.required}
        />
      )}

      {props.type === 'textarea' && (
        <textarea
          style={{ width: props.width || "100%" }}
          className={`${props.error ? "error" : ""} `}
          onChange={props.onChangeTextArea}
          placeholder={props.placeholder}
          value={props.value}
          name={props.name}
          required={props.required}
          rows={props.rows ? props.rows : 7}
        />
      )}
    </div>
  );
};
