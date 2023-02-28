/**
 * @param {number[]} nums
 * @return {boolean} 
 */
const containsDuplicate = (nums) => {
    const numSet = new Set();
    let isDuplicate = false;

    nums.forEach(num => {
      let oldSize = numSet.size;
      numSet.add(num);
      if (numSet.size === oldSize)
        isDuplicate = true;
    });
  
    return isDuplicate;
  }

module.exports = {
    containsDuplicate
}