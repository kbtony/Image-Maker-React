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
    errors.canvasHeight = "Integer required";
  }

  if (Object.keys(errors).length === 0) {
    if (+canvasWidth * +canvasHeight !== 32768) {
      errors.area = "The multiplication of Width and Height is not equal to 32,768";
    } 
  }
  
  return errors;
}