// Shuffle Function
export function shuffleArray(numbered) {
  var ctr = numbered.length,
    temp,
    index;
  // While there are elements in the array
  while (ctr > 0) {
    // Pick a random index
    index = Math.floor(Math.random() * ctr);
    // Decrease ctr by 1
    ctr--;
    // And swap the last element with it
    temp = numbered[ctr];
    numbered[ctr] = numbered[index];
    numbered[index] = temp;
  }
  return numbered;
}
