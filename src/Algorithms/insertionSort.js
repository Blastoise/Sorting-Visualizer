function insertionSort(array, speed, createColor, createAnimation) {
  let delay = speed;
  let arraySize = array.length;

  for (let i = 1; i < arraySize; i++) {
    let key = array[i];
    let j = i - 1;
    while (j >= 0 && array[j] > key) {
      createColor([j, j + 1], delay, "COMPARE");
      delay += speed;

      createColor([j, j + 1], delay, "SWAP");
      createAnimation(array, j, j + 1, delay);
      delay += speed;

      createColor([], delay, "NONE");
      delay += speed;

      j = j - 1;
    }
    if (j !== -1) {
      createColor([j, j + 1], delay, "COMPARE");
      delay += speed;
      createColor([], delay, "NONE");
      delay += speed;
    }
  }
}

export default insertionSort;
