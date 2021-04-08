import React, { useState } from 'react';
import Pixel from "./pixel";

export default function Line(props) {
  const { width } = props;

  let pixels = [];

  for (let i = 0; i < width; i++) {
    pixels.push(<Pixel key={i} />);
  }

  return (
    <div className="line">{pixels}</div>
  )
}