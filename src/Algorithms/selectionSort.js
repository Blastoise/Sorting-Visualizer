export function selectionSort(array, speed, createColor, createAnimation) {
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

export const selectionSortInfo = {
  name: "Selection Sort",
  description:
    "Selection Sort is an in-place comparison sorting algorithm that divides the input list into two parts: the sublist of items already sorted, which is built up from left to right at the front (left) of the list, and the sublist of items remaining to be sorted that occupy the rest of the list. Initially, the sorted sublist is empty and the unsorted sublist is the entire input list. The algorithm proceeds by finding the smallest element in the unsorted sublist, exchanging (swapping) it with the leftmost unsorted element (putting it in sorted order), and moving the sublist boundaries one element to the right.",
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
    bestTime: (
      <span>
        O(n<sup>2</sup>)
      </span>
    ),
    worstSpace: <span>O(1)</span>,
  },
};
