import "../styles/row.scss";
import Pixel from "./pixel";

export default function Row(props) {
  const { width, colors } = props;

  let pixels = [];

  // each row of an image is consist of multiple Pixel elements
  for (let i = 0; i < width; i++) {
    pixels.push(<Pixel key={i} color={colors[i]} />);
  }

  return (
    <div className="row">{pixels}</div>
  );
}