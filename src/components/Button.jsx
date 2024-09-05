import style from "./Button.module.css";
const Button = ({isEmailButton, icons, text, ...rest}) => {
  return (
    <button {...rest} className={isEmailButton ? style.newContainer : style.container}>
      <span>{icons}</span>
      <p>{text}</p>
    </button>
  );
};
export default Button;
