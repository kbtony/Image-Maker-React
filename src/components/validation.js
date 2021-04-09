export default function Validation(canvasWidth, canvasHeight) {
  let errors = {};

  if (!canvasWidth) {
    errors.canvasWidth = "Width required";
  } else if (!Number.isInteger(+canvasWidth)) {
    errors.canvasWidth = "Integer required";
  }

  if (!canvasHeight) {
    errors.canvasHeight = "Height required";
  } else if (!Number.isInteger(+canvasHeight)) {
    console.log("validate: " + typeof canvasHeight);
    errors.canvasHeight = "Integer required";
  }

  if (Object.keys(errors).length === 0) {
    if (+canvasWidth * +canvasHeight !== 32768) {
      console.log("32768");
      errors.area = "The multiplication of length and width is not equal to 32768";
    } 
  }
  
  return errors;
}