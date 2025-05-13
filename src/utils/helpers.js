export function createArray(N) {
  return [...Array(N).keys()].map((i) => i + 1);
}

export function randomizeArray(arr) {
  return [...arr].sort(() => Math.random() - 0.5);
}
