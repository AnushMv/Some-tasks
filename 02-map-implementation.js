Array.prototype.myMap = function (callBack) {
  const arr = this;
  const newArr = [];

  for (let i = 0; i < arr.length; i++) {
    const newElem = callBack(arr[i]);
    newArr.push(newElem);
  }

  return newArr;
};

const idList = [
  { id: 1, name: "John" },
  { id: 2, name: "Jane" }
].myMap(function (elem) {
  return elem.id;
});

console.log(idList);
