function search(array, value) {
  // your code here
  let start = 0;
  let end = array.length - 1;
}

var arr = [1, 3, 16, 22, 31, 33, 97]
console.log(search(arr, 31)); // => 4



// function search(array, value) {
//   // your code here
//   let start = 0;
//   let end = array.length - 1;
//   for (let i = start; start <= end; i++) {
//     let mid = start + end / 2;
//     if (array[mid] > value) end = mid - 1
//     else if (array[mid] < value) start = mid + 1
//     else if (array[mid] == value) return array.indexOf(value)
//     console.log(start)
//     console.log(end)
//   }
// }