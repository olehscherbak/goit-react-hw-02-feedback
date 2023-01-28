export default function textColorChange(good, neutral, bad, total) {
  const red = Math.round((bad / total) * 255);
  const green = Math.round((good / total) * 255);
  const blue = Math.round((neutral / total) * 255);
  return 'rgb(' + red + ',' + green + ',' + blue + ')';
}
