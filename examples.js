

const myArray = ['apple', 'pear', 'banana', 'orange'];

const findOrange = myArray.find(function (fruit) {
  return fruit === 'orange';
});

console.log(findOrange);
