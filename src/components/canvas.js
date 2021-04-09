import "../styles/canvas.scss";
import Row from "./row"

export default function Canvas(props) {
  const { width, height } = props;

  // generate 32,768 discrete colours
  let colorPool = [];
  for (let i = 1; i < 33; i++) {
    for (let j = 1; j < 33; j++) {
      for (let k = 1; k < 33; k++) {
        let color = [i * 8, j * 8, k * 8];
        colorPool.push(color);
      }
    }
  }

  // generate 2D array based on input height and width for storing colors
  let colors = new Array(height);
  for (let i = 0, k = 0; i < height; i++) {
    colors[i] = new Array(width);
    for (let j = 0; j < width; j++) {
      colors[i][j] = colorPool[k++];
    }
  }

  // create image
  let rows = [];
  for (let i = 0; i < height; i++) {
    rows.push(<Row key={i} width={width} colors={colors[i]} />);
  }

  return (
    <div id="canvas">
      <div id="pixels">
        {rows}
      </div>
    </div>
  );
}