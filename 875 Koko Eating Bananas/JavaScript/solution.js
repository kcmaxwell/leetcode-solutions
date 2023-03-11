/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function (piles, h) {
  // get max pile
  // let maxPile = 0;
  // for (const pile of piles) maxPile = Math.max(pile, maxPile);
  const maxPile = Math.max(...piles);

  // use a start and end pointer to perform binary search on the numbers 1 to maxPile
  let start = 1;
  let end = maxPile;
  let minK = maxPile;
  while (start <= end) {
    // get the number of hours to eat all piles with the midpoint of start and end
    const k = Math.floor((start + end) / 2);
    let hours = 0;
    for (const pile of piles) {
      hours += Math.ceil(pile / k);
    }

    // if k worked, search the left for a smaller k
    if (hours <= h) {
      minK = Math.min(minK, k);
      end = k - 1;
    }
    // else, search the right for a bigger k
    else {
      start = k + 1;
    }
  }

  return minK;
};

module.exports = minEatingSpeed;
