import React, { useState } from 'react';

export const TextBox = (props) => {
  let handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  let handleLoClick = () => {
    let loCase = text.toLowerCase();
    setText(loCase);
  };
  let handleCopyClick = () => {
    let copySelec = document.querySelector('#myBox');
    copySelec.select();
    copySelec.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copySelec.value);
  };
  let handleOnChange = (e) => {
    setText(e.target.value);
  };
  const [text, setText] = useState('');
  return (
    <>
      <div classNameName="container">
        <div className="mb-3">
          <label for="myBox" className="form-label">
            Enter Your Text Here...
          </label>
          <textarea
            className="form-control"
            value={text}
            id="myBox"
            rows="10"
            onChange={handleOnChange}
          ></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>
          Convert to UpperCase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>
          Convert to LowerCase
        </button>
        <button className="btn btn-primary" onClick={handleCopyClick}>
          Copy Text
        </button>
      </div>
      <div className="container my-3">
        <h1>Your Text Summary</h1>
        <p>
          {text.split(' ').length} words {text.length} characters
        </p>
        <p>{0.008 * text.split(' ').length} Minutes to read</p>
      </div>
    </>
  );
};
