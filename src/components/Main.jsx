import Button from "./Button";
import { FaGooglePlusG } from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import style from "./Main.module.css";
import { useState } from "react";
const Main = () => {
  const [myName, setMyName] = useState("Vickey");
  const [myEmail, setMyEmail] = useState("Vickey@gmail.com");
  const [myText, setMyText] = useState("Vickey is good boy");
  const onSubmit = (event) => {
    event.preventDefault();
    setMyName(event.target[0].value);
    setMyEmail(event.target[1].value);
    setMyText(event.target[2].value);
    event.target[0].value="";
    event.target[1].value="";
    event.target[2].value="";
    // console.log(event.target[0].value);
    // console.log(event.target[1].value);
    // console.log(event.target[2].value);
  };
  const onViaCallSubmit = () => {
    console.log("Thanks to reach us via call");
  };

  return (
    <div className={style.container}>
      <div className={style.submitForm}>
        <div className={style.forms}>
          <Button icons={<FaGooglePlusG />} text={"Login Via Google"} />
          <Button
            onClick={onViaCallSubmit}
            icons={<IoCallOutline />}
            text={"Login Via Number"}
          />
        </div>
        <Button
          isEmailButton={true}
          icons={<MdEmail />}
          text={"Login Via Email"}
        />
        <form onSubmit={onSubmit}>
          <div className={style.form_control}>
            <label htmlFor="CustomerName">Name</label>
            <input type="text" name="CustomerName" />
          </div>
          <div className={style.form_control}>
            <label htmlFor="CustomerEmail">Email</label>
            <input type="email" name="CustomerEmail" />
          </div>
          <div className={style.form_control}>
            <label htmlFor="CustomerText">Text</label>
            <textarea rows="8" name="CustomerText" />
          </div>
          <div className={style.submit}>
            <Button text={"Submit"} />
          </div>
          <p>Name: {myName}</p>
          <p>Email: {myEmail}</p>
          <p>Text: {myText}</p>
        </form>
      </div>
      <img src="./src/images/support.png" alt="Support" />
    </div>
  );
};
export default Main;
