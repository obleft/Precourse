// Do not change any of the function names

function invokeCallback(cb) {
  // invoke cb
  return cb();
}

function sumArray(numbers, cb) {
  // sum up all of the integers in the numbers array
  // pass the result to cb
  // no return is necessary
  var sum = 0;
  numbers.forEach(function(item, index) {
      sum = sum + item;
  });
  cb(sum);
}

function forEach(arr, cb) {
  // iterate over arr and pass its values to cb one by one
  // hint: you will be invoking cb multiple times (once for each value in the array)
  arr.forEach(function(item, index) {
      cb(item);
  });

}

function map(arr, cb) {
  // create a new array
    var arr2 = [];
  // iterate over each value in arr, pass it to cb, then place the value returned from cb into the new arr
  arr.forEach(function(item, index) {
      arr2[index] = cb(item);
  });

  return arr2;
  // the new array should be the same length as the array argument

}

// Do not modify code below this line.
// --------------------------------

module.exports = {
  invokeCallback,
  sumArray,
  forEach,
  map,
};
