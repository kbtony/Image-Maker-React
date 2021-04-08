import Pixel from "./pixel";
import "../styles/row.scss";

export default function Row(props) {
  const { width, colors } = props;

  let pixels = [];

  // create the row of a image by multiple Pixel elements
  for (let i = 0; i < width; i++) {
    pixels.push(<Pixel key={i} color={colors[i]} />);
  }

  return (
    <div className="row">{pixels}</div>
  );
}