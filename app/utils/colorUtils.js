export function hexToRgb(hex, opacity = 255) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (result) {
    const r = parseInt(result[1], 16);
    const g = parseInt(result[2], 16);
    const b = parseInt(result[3], 16);
    return [r, g, b, opacity]; // return 23,14,45 -> reformat if needed
  }
  return null;
}
