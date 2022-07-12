Array.prototype.myForecah = function (callBack) {
  let arr = this;

  for (let i = 0; i < arr.length; i++) {
    callBack(arr[i], i);
  }
};

["John", "Robin", "Bob", "Jane"].myForecah(function (elem, index) {
  console.log(elem);
  console.log(index);
});
