const sortClass = require('./sortClass');

// insertionSort([3, 1, 2, 5, 4])
// insertionSort([35, 27, 13, 3, 12, 25, 45])
const sort = new sortClass([3, 4, 2, 5, 1])
console.log(sort.sort('insertion'))