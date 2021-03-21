export function createAnimationMergeSort(tempArr, delay) {
  const array = [...tempArr];
  this.timeout.push(
    setTimeout(() => {
      this.setState({ array });
    }, delay)
  );
}

export function createAnimation(tempArr, indexOne, indexTwo, delay) {
  const temp = tempArr[indexOne];
  tempArr[indexOne] = tempArr[indexTwo];
  tempArr[indexTwo] = temp;
  const array = [...tempArr];

  this.timeout.push(
    setTimeout(() => {
      this.setState({ array });
    }, delay)
  );
}
