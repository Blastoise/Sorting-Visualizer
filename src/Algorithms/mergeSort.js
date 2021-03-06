function merge(
  array,
  l,
  middle,
  r,
  delay,
  speed,
  createColor,
  createAnimationMergeSort
) {
  let left = [];
  let right = [];

  for (let i = l; i <= middle; i++) {
    left.push(array[i]);
  }
  for (let i = middle + 1; i <= r; i++) {
    right.push(array[i]);
  }

  let i, j, k;
  i = 0;
  j = 0;
  k = l;

  while (i < left.length && j < right.length) {
    createColor([i + l, j + middle + 1], delay, "COMPARE");
    delay += speed;

    if (left[i] < right[j]) {
      array[k] = left[i];

      createAnimationMergeSort(array, delay);
      delay += speed;

      createColor([], delay, "NONE");
      delay += speed;

      i++;
    } else {
      array[k] = right[j];

      createAnimationMergeSort(array, delay);
      delay += speed;

      createColor([], delay, "NONE");
      delay += speed;

      j++;
    }

    k++;
  }

  while (i < left.length) {
    createColor([i + l, i + l], delay, "COMPARE");
    delay += speed;

    array[k] = left[i];

    createAnimationMergeSort(array, delay);
    delay += speed;

    createColor([], delay, "NONE");
    delay += speed;

    k++;
    i++;
  }

  while (j < right.length) {
    createColor([j + middle + 1, j + middle + 1], delay, "COMPARE");
    delay += speed;

    array[k] = right[j];

    createAnimationMergeSort(array, delay);
    delay += speed;

    createColor([], delay, "NONE");
    delay += speed;
    k++;
    j++;
  }
  return delay;
}

export function mergeSort(
  array,
  l,
  r,
  delay,
  speed,
  createColor,
  createAnimationMergeSort
) {
  let newDelay = delay;

  if (r > l) {
    let middle = Math.floor((r + l) / 2);
    newDelay = mergeSort(
      array,
      l,
      middle,
      newDelay,
      speed,
      createColor,
      createAnimationMergeSort
    );
    newDelay = mergeSort(
      array,
      middle + 1,
      r,
      newDelay,
      speed,
      createColor,
      createAnimationMergeSort
    );
    newDelay = merge(
      array,
      l,
      middle,
      r,
      newDelay,
      speed,
      createColor,
      createAnimationMergeSort
    );
  }
  return newDelay;
}

export const mergeSortInfo = {
  name: "Merge Sort",
  description: `Merge Sort is an efficient, stable sorting algorith that makes use of the divide and conquer strategy.
   Conceptually, a merge sort works as follows:
    1. Divide the unsorted list into n sublists, each containing one element (a list of one element is considered sorted).
     2. Repeatedly merge sublists to produce new sorted sublists until there is only one sublist remaining. This will be the sorted list.`,
  performance: {
    worstTime: <span>O(nlogn)</span>,
    averageTime: <span>O(nlogn)</span>,
    bestTime: <span>O(nlogn)</span>,
    worstSpace: <span>O(n)</span>,
  },
};
