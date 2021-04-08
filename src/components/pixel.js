import "../styles/pixel.scss";

export default function Pixel(props) {
  const { color } = props;

  // represent the colors with RGB model
  function formatColor(color) {
    return `rgb(${color[0]}, ${color[1]}, ${color[2]})`;
  }

  return (
    <div className="pixel" style={{ backgroundColor: formatColor(color) }}></div>
  );
}