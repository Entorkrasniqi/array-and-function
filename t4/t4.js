function sortArray(numbers) {
  const sortedArray = [...numbers].sort((a, b) => a - b);
  return sortedArray;
}

const originalArray = [34, 7, 23, 32, 5, 62, 12];

console.log("Original Array:", originalArray);

const sortedArray = sortArray(originalArray);

console.log("Sorted Array:", sortedArray);
