export function bubbleSort(array, speed, createColor, createAnimation) {
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
  return delay;
}

export const bubbleSortInfo = {
  name: "Bubble Sort",
  description:
    'Bubble Sort, sometimes referred to as sinking sort, is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order. The pass through the list is repeated until the list is sorted. The algorithm, which is a comparison sort, is named for the way smaller or larger elements "bubble" to the top of the list. This simple algorithm performs poorly in real world use and is used primarily as an educational tool.',
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
