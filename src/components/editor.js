import React, { useState } from 'react'

export default function Editor() {
  const [panelWidth, setPanelWidth] = useState(128);
  const [panelHeight, setPanelHeight] = useState(256);
  const [hideOptions, setHideOptions] = useState(false);
  const [hideDrawingPanel, setHideDrawingPanel] = useState(true);
  const [buttonText, setButtonText] = useState("Create Image");

  function initialize() {
    setHideOptions(!hideOptions);
    setHideDrawingPanel(!hideDrawingPanel);

    buttonText === "Create Image" ? setButtonText("Reset") : setButtonText("Create Image");
  }
  
  return (
    <div id="canvas">
      <h1>Image</h1>
      {hideDrawingPanel && <h2>Enter Panel Dimensions</h2>}
      {hideDrawingPanel && (<div id="options">
        <div className="option">
          <input
            type="number"
            className="panelInput"
            defaultValue={panelWidth}
            onChange={(e) => { setPanelWidth(e.target.value) }}
          />
          <span>Width</span>
        </div>
        <div className="option">
          <input
            type="number"
            className="panelInput"
            defaultValue={panelHeight}
            onChange={(e) => { setPanelHeight(e.target.value) }}
          />
          <span>Height</span>
        </div>
      </div>)}

      <button onClick={initialize} className="button">{buttonText}</button>
    </div>
  )
}


