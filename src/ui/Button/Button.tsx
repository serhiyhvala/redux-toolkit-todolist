import styles from "./Button.module.scss";
import {FC} from "react";

export type ButtonType = {
  children: string
  className: 'primary' | 'secondary'
}

const Button: FC<ButtonType> = ({children, className}) => {
  const setClassName = className === 'primary' ? styles.button_primary : styles.button_secondary
  return (
      <button className={setClassName}>{children}</button>
  );
};

export default Button;
