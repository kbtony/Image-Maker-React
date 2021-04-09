import "../styles/editor.scss";
import { useState, useEffect } from 'react';
import Canvas from "./canvas";
import Validation from "./validation"

export default function Editor() {
  const [canvasWidth, setCanvasWidth] = useState(128);
  const [canvasHeight, setCanvasHeight] = useState(256);
  const [hideOptions, setHideOptions] = useState(false);
  const [hideCanvas, setHideCanvas] = useState(true);
  const [buttonText, setButtonText] = useState("Create Image");
  // validate input
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  function initialize() {
    setErrors(Validation(canvasWidth, canvasHeight))
    setIsSubmitting(true);
  }

  useEffect(
    () => {
      if (Object.keys(errors).length === 0 && isSubmitting) {
        setHideOptions(!hideOptions);
        setHideCanvas(!hideCanvas);
        buttonText === "Create Image" ? setButtonText("Reset") : setButtonText("Create Image");
      }
    },
    [errors]
  );

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
            {errors.canvasWidth && <p id="warning">{errors.canvasWidth}</p>}
          </div>
          <div className="option">
            <input
              type="number"
              className="panelInput"
              defaultValue={canvasHeight}
              onChange={(e) => { setCanvasHeight(e.target.value) }}
            />
            <span>Height</span>
            {errors.canvasHeight && <p id="warning">{errors.canvasHeight}</p>}
          </div>
        </div>
      )}
      {errors.area && <p id="warning">{errors.area}</p>}

      <button onClick={initialize} className="button">{buttonText}</button>
      {hideOptions && (<Canvas width={canvasWidth} height={canvasHeight} />)}
    </div>
  );
}