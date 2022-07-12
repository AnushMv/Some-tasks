Array.prototype.myReduce = function (callBack, initialValue) {
  const arr = this;
  let accumulator = initialValue || arr[0];
  let startFromINdex = initialValue ? 0 : 1;

  for (let i = startFromINdex; i < arr.length; i++) {
    const item = arr[i];
    accumulator = callBack(accumulator, item);
  }

  return accumulator;
};

const sum = ["a", "b", "c", "d", "e"].myReduce(function (acm, item) {
  return acm + item;
});

console.log(sum);
