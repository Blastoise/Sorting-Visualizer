export function createColor(indexArr, delay, action) {
  switch (action) {
    case "SWAP":
      this.timeout.push(
        setTimeout(() => {
          this.setState({ swapped: [...indexArr] });
        }, delay)
      );
      break;
    case "COMPARE":
      this.timeout.push(
        setTimeout(() => {
          this.setState({ compareElements: [...indexArr] });
        }, delay)
      );
      break;
    default:
      this.timeout.push(
        setTimeout(() => {
          this.setState({ compareElements: [], swapped: [] });
        }, delay)
      );
  }
}
