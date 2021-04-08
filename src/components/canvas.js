import React, { useState } from 'react';
import Line from "./line"

export default function Canvas(props) {
  const { width, height } = props;

  let rows = [];

  for (let i = 0; i < height; i++) {
    rows.push(<Line key={i} width={width}/>);
  }

  return (
    <div id="canvas">
      <h1>haha</h1>
      <div id="pixels">
        {rows}
      </div>
    </div>
  )
}