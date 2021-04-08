import React, { useState } from 'react';
import "../styles/canvas.scss";
import Row from "./row"

export default function Canvas(props) {
  const { width, height } = props;

  let rows = [];

  for (let i = 0; i < height; i++) {
    rows.push(<Row key={i} width={width}/>);
  }

  return (
    <div id="canvas">
      <div id="pixels">
        {rows}
      </div>
    </div>
  )
}