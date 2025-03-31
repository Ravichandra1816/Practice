import { useState } from "react";
import "./Main.css";
import Button from "../Button/Button";
import { BiSolidMessageDots } from "react-icons/bi";
import { BiSolidPhoneCall } from "react-icons/bi";

const Main = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    setName(event.target[0].value);
    setEmail(event.target[1].value);
    setText(event.target[2].value);
  };
  return (
    <div className="main">
      <div className="left">
        <div className="btn">
          <Button
            text="VIA SUPPORT CHAT"
            icon={<BiSolidMessageDots className="svg" />}
          />
          <Button
            text="VIA  CALL"
            icon={<BiSolidPhoneCall className="svg" />}
          />
        </div>
        <form onSubmit={onSubmit}>
          <div>
            <label htmlFor="name">Name</label>
            <input type="text" placeholder="Enter your Nmae" />
            <label>Email</label>
            <input type="email" placeholder="Enter your Nmae" />
            <label>Text</label>
            <textarea rows={5} placeholder="Type your message!" />
            <Button text="Submit" />
          </div>

          <div>{name + " " + email + " " + text}</div>
        </form>
      </div>

      <div className="right">
        <img src="./img.png" />
      </div>
    </div>
  );
};

export default Main;
