// BUBBLE SORT

// LOOP
// SWAP

let arr = [43, 34, 1,343,343,43];

const bubbleSort = () => {
  var count = 0;
  var sorted = false;

  for (var i = 0; i < arr.length - 1; i++) {
    for (var j = 0; j < arr.length - i; j++) {
      let TEMP = 0;
      console.log(count++);
      if (arr[j] > arr[j + 1]) { 
        TEMP = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = TEMP;
        
        console.log(arr);
      }
      else{
        sorted= true;
      }
    }
    if (!sorted) return;
  }
};

bubbleSort();
