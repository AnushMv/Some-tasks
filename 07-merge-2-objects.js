/*
{
  name: 'John',
  age: 23,
}

{
  name: 'Jane',
  salary: '$ 250 000'
  position: 'Director',
}
 */

function merge(obj1, obj2) {
  const mergedObject = {};

  for (let ArrName in obj1) {
    mergedObject[ArrName] = obj1[ArrName];
  }
  for (let ArrName in obj2) {
    mergedObject[ArrName] = obj2[ArrName];
  }

  return mergedObject;
}
