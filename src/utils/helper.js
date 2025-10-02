export function convertDate(date) {
  return new Date(date).toLocaleDateString();
}
export function lineClamp(text, length = 7) {
  const convertTxt = text?.split(".");

  return convertTxt?.[0]?.slice(0, length) + "...";
}
