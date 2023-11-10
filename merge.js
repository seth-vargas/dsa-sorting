function merge(arr1 = [], arr2 = []) {
  let output = [];
  let a = 0;
  let b = 0;

  while (a < arr1.length && b < arr2.length) {
    let val1 = arr1[a];
    let val2 = arr2[b];

    if (val1 <= val2) {
      output.push(val1);
      a++;
    } else {
      output.push(val2);
      b++;
    }
  }

  while (a < arr1.length) {
    output.push(arr1[a]);
    a++;
  }
  while (b < arr2.length) {
    output.push(arr2[b]);
    b++;
  }

  return output;
}

function mergeSort(arr = []) {
  // BASE CASE
  if (arr.length <= 1) return arr;

  // NORMAL CASE
  const mid = Math.floor(arr.length / 2);

  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

module.exports = { merge, mergeSort };
