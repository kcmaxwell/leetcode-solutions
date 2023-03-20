/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
  let flowersLeft = n;
  let left = -1;
  let right = 1;

  for (let i = 0; i < flowerbed.length; i++) {
    let leftEmpty = true;
    let rightEmpty = true;

    if (left >= 0 && flowerbed[left] !== 0) leftEmpty = false;
    if (right < flowerbed.length && flowerbed[right] !== 0) rightEmpty = false;
    if (leftEmpty === true && rightEmpty === true && flowerbed[i] !== 1) {
      flowerbed[i] = 1;
      flowersLeft--;
    }

    left++;
    right++;
  }

  if (flowersLeft <= 0) return true;
  return false;
};

module.exports = canPlaceFlowers;
