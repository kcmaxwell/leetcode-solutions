/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function (people, limit) {
  let result = 0;

  // create a map from the people array
  const map = new Map();
  for (const person of people) {
    if (map.has(person)) map.set(person, map.get(person) + 1);
    else map.set(person, 1);
  }

  for (const person of people) {
    // if used all persons of this weight, skip
    if (map.get(person) <= 0) continue;

    let target = limit - person;
    while (target > 0) {
      if (map.has(target)) {
        if (target === person && map.get(target) >= 2) break;
        else if (target !== person && map.get(target) >= 1) break;
      }
      target--;
    }

    if (target === 0) {
      map.set(person, map.get(person) - 1);
    } else {
      map.set(person, map.get(person) - 1);
      map.set(target, map.get(target) - 1);
    }

    result++;
  }

  return result;
};

module.exports = numRescueBoats;
