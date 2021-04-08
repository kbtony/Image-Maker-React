import React, { useState } from 'react';
import Pixel from "./pixel";
import "../styles/row.scss";


export default function Row(props) {
  const { width } = props;

  let pixels = [];

  for (let i = 0; i < width; i++) {
    pixels.push(<Pixel key={i} />);
  }

  return (
    <div className="row">{pixels}</div>
  )
}