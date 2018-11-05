// error.js
export default function getErrorMessage(code) {
  if (code === 1) {
    return "Oh Sphinx of black quartz, judge my vow";
  } else if (code === 2) {
    return "Rabbits don't eat carrots";
  } else if (code === 3) {
    return "Cats don't eat mouses";
  }
  throw new Error("No error messages for that code");
}
