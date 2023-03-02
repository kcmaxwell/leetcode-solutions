/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  // select pivot as midpoint of array
  const pivotIndex = Math.floor(nums.length / 2);
  const pivot = nums[pivotIndex];

  // if pivot is the target, return index
  if (pivot === target) return pivotIndex;

  // if length of nums is 1 and pivot is not target, return -1 for target not found
  if (nums.length === 1) return -1;

  // if target is smaller than pivot, recurse on first half of the array
  if (target < pivot) return search(nums.slice(0, pivotIndex), target);
  // if target is bigger than pivot, recurse on second half of the array
  // make sure to add the pivotIndex to the returned index to make it match the real nums array
  else {
    const searchResult = search(nums.slice(pivotIndex, nums.length), target);
    return searchResult === -1 ? -1 : searchResult + pivotIndex;
  }
};

module.exports = search;
