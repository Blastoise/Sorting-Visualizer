function selectionSort(array, speed, createColor, createAnimation) {
  let delay = speed;
  let arraySize = array.length;

  for (let i = 0; i < arraySize - 1; i++) {
    let min = i;
    for (let j = i + 1; j < arraySize; j++) {
      createColor([min, j], delay, "COMPARE");
      delay += speed;

      if (array[min] > array[j]) {
        min = j;
      }

      createColor([], delay, "NONE");
      delay += speed;
    }

    if (min !== i) {
      createColor([min, i], delay, "SWAP");
      createAnimation(array, min, i, delay);
      delay += speed;
    }

    createColor([], delay, "NONE");
    delay += speed;
  }
  return delay;
}

export default selectionSort;
