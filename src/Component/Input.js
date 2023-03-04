import React from "react";
import "../stylesheet/style.css";
const Input = () => {
  return (
    <div className="input-div">
      <label htmlFor="text input">Text Input</label>
      <input type="text" id="text input" placeholder="text" />
      <label htmlFor="Dates">Dates</label>
      <input type="date" id="Dates" />
      <label htmlFor="file input">file input</label>
      <input type="file" id="file input" />
      <label htmlFor="read only">Read only Input</label>
      <input readOnly placeholder="This can only be copied" />
      <label htmlFor="disable input">Disable Input</label>
      <input placeholder="Disable input" id="disable input" disabled />
      <label htmlFor="textarea">textarea</label>
      <textarea placeholder="message"></textarea>
      <label htmlFor=" disable textarea">Disable textarea</label>
      <textarea placeholder="disable textarea" disabled></textarea>
    </div>
  );
};

export default Input;
