// Function to get user input for the array using prompt
function getArrayFromUser() {
    let arr = [];
    for (let i = 0; i < 10; i++) {
      let num = parseInt(prompt("Enter a number:"));
      arr.push(num);
    }
    return arr;
  }
  
  // Bubble Sort Algorithm implementation
  function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          // Swap arr[j] and arr[j + 1]
          let temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
        // Log the comparison process
        console.log(`Comparison ${j+1}: ${arr.join(', ')}`);
      }
    }
    return arr;
  }
  
  // Main function to execute the sorting
  function main() {
    let arr = getArrayFromUser(); // Get the array from user input
    console.log("Original Array: ", arr.join(', '));
    let sortedArray = bubbleSort(arr); // Sort the array
    console.log("Sorted Array: ", sortedArray.join(', '));
  }
  
  // Execute the main function
  main();
  