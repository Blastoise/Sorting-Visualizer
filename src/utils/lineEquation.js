export function lineEquation(maxHeight, highest, lowest) {
  let slope = ((75 * maxHeight) / 100 - 5) / (highest - lowest);
  let intercept = 5 - lowest * slope;
  return { slope, intercept };
}
