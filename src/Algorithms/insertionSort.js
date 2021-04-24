export function insertionSort(array, speed, createColor, createAnimation) {
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
  return delay;
}

export const insertionSortInfo = {
  name: "Insertion Sort",
  description: `Insertion sort is a simple sorting algorithm that works similar to the way you sort playing cards in your hands.
     The array is virtually split into a sorted and an unsorted part.
      Values from the unsorted part are picked one by one and placed at the correct position in the sorted part.
       It is an in-place, stable sorting algorithm that is inefficient on large input arrays but works well for data sets that are almost sorted.`,
  performance: {
    worstTime: (
      <span>
        O(n<sup>2</sup>)
      </span>
    ),
    averageTime: (
      <span>
        O(n<sup>2</sup>)
      </span>
    ),
    bestTime: <span>O(n)</span>,
    worstSpace: <span>O(1)</span>,
  },
};
