function bubbleSort(arr = []) {
  for (let a = 0; a < arr.length; a++) {
    let swapped = false;
    for (let b = 0; b < arr.length - a; b++) {
      if (arr[b] > arr[b + 1]) {
        let temp = arr[b];
        arr[b] = arr[b + 1];
        arr[b + 1] = temp;
        swapped = true;
      }
    }
    if (!swapped) break;
  }
  return arr;
}

module.exports = bubbleSort;
