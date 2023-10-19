function mergeSortDescending(arr) {
    if (arr.length <= 1) {
      return arr;
    }
  
    // Split the array into two halves
    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);
  
    // Recursively sort and merge the halves
    return mergeDescending(mergeSortDescending(left), mergeSortDescending(right));
  }
  
  function mergeDescending(left, right) {
    const result = [];
    let leftIndex = 0;
    let rightIndex = 0;
  
    // Compare elements in both arrays and add the larger one to the result
    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] > right[rightIndex]) {
        result.push(left[leftIndex]);
        leftIndex++;
      } else {
        result.push(right[rightIndex]);
        rightIndex++;
      }
    }
  
    // Concatenate any remaining elements from both arrays (if any)
    return result.concat(left.slice(leftIndex), right.slice(rightIndex));
  }
  
  const numbers = [5, 2, 9, 1, 5, 6];
  const sortedArray = mergeSortDescending(numbers);
  console.log(sortedArray); // The sorted array in descending order
  