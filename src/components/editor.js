import { useState } from 'react';
import "../styles/editor.scss";
import Canvas from "./canvas";

export default function Editor() {
  const [canvasWidth, setCanvasWidth] = useState(128);
  const [canvasHeight, setCanvasHeight] = useState(256);
  const [hideOptions, setHideOptions] = useState(false);
  const [hideCanvas, setHideCanvas] = useState(true);
  const [buttonText, setButtonText] = useState("Create Image");

  function initialize() {
    setHideOptions(!hideOptions);
    setHideCanvas(!hideCanvas);

    buttonText === "Create Image" ? setButtonText("Reset") : setButtonText("Create Image");
  }

  return (
    <div id="editor">
      <h1>Image Maker</h1>
      {hideCanvas && <h2>Enter Image Dimensions</h2>}
      {hideCanvas && (
        <div id="options">
          <div className="option">
            <input
              type="number"
              className="panelInput"
              defaultValue={canvasWidth}
              onChange={(e) => { setCanvasWidth(e.target.value) }}
            />
            <span>Width</span>
          </div>
          <div className="option">
            <input
              type="number"
              className="panelInput"
              defaultValue={canvasHeight}
              onChange={(e) => { setCanvasHeight(e.target.value) }}
            />
            <span>Height</span>
          </div>
        </div>
      )}

      <button onClick={initialize} className="button">{buttonText}</button>
      {hideOptions && (<Canvas width={canvasWidth} height={canvasHeight} />)}
    </div>
  );
}