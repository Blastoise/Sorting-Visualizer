function bubbleSort(array, speed, createColor, createAnimation) {
  let delay = speed;
  let arraySize = array.length;

  for (let i = 0; i < arraySize - 1; i++) {
    for (let j = 0; j < arraySize - 1 - i; j++) {
      createColor([j, j + 1], delay, "COMPARE");
      delay += speed;

      if (array[j] > array[j + 1]) {
        createColor([j, j + 1], delay, "SWAP");
        createAnimation(array, j, j + 1, delay);
        delay += speed;
      }

      createColor([], delay, "NONE");
      delay += speed;
    }
  }
}

export default bubbleSort;
