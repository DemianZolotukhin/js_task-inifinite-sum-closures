'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sumOfAllNumbers = 0;
  let copyOfSum;

  const adder = (number = null) => {
    sumOfAllNumbers += number;

    if (number === null) {
      copyOfSum = sumOfAllNumbers;
      sumOfAllNumbers = 0;

      return copyOfSum;
    }

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
