import { useState } from "react";
import "./index.scss";
interface IProps {
  value: boolean;
  onChange(value: boolean): void;
}
export const Checkbox: React.FC<IProps> = ({ onChange, value }) => {
  const [isChecked, setValue] = useState<boolean>(value);

  const toggle = () => {
    setValue((p) => !p);
  };
  return (
    <>
      <label className="container">
        <input
          type="checkbox"
          onChange={() => {
            toggle();
            onChange(!isChecked);
          }}
          checked={value}
        />
        <span className="checkmark"></span>
      </label>
    </>
  );
};
