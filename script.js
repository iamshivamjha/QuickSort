let inputArray = document.getElementById("input-Array");
const sortBtn = document.getElementById("sort-btn");
const heading = document.getElementById("heading");
const result = document.getElementById("result");
const infoBtn = document.getElementById("info-button");
const algorithmInfo = document.getElementById("alogrithm-info");
const input = document.getElementById("input");

// Event Listeners

heading.addEventListener("click", () => {
    window.location.reload();
});

infoBtn.addEventListener("click", () => {
    algorithmInfo.style.display = "block";

    // alert(
    //     "This is a simple sorting algorithm that works by repeatedly swapping the adjacent elements if they are in wrong order."
    // );


});

algorithmInfo.addEventListener("click", () => {
    algorithmInfo.style.display = "none";
});


sortBtn.addEventListener("click", () => {
    if(inputArray.value === "") {
        alert("Please enter a valid array");
        // heading.innerHTML = "Please enter an array";
        // result.innerHTML = "";
    } 
    else {
function partition(arr, start, end) {
    const pivotValue = arr[start]
    let swapIndex = start
    for (let i = start + 1; i <= end; i++) {
      if (pivotValue > arr[i]) {
        swapIndex++
        if (i !== swapIndex) {
          // SWAP
          ;[arr[i], arr[swapIndex]] = [arr[swapIndex], arr[i]]
        }
      }
    }
    if (swapIndex !== start) {
      // Swap pivot into correct place
      ;[arr[swapIndex], arr[start]] = [arr[start], arr[swapIndex]]
    }
    return swapIndex
  }
  
  function quickSort(arr, start = 0, end = arr.length - 1) {
    // Base case
    if (start >= end) return
    let pivotIndex = partition(arr, start, end)
    // Left
    quickSort(arr, start, pivotIndex - 1)
    // Right
    quickSort(arr, pivotIndex + 1, end)
    return arr
  }
  
  let temparr = inputArray.value.split(",");
  let arr = temparr.map((item) => parseFloat(item));
  quickSort(arr);
  result.style.visibility="visible";
  input.style.visibility ="visible";
    input.innerHTML = `Input: ${temparr}`;
    result.innerHTML = `Output: ${arr}`;
    inputArray.value = "";

 }});