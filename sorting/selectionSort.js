var aInput = [23, 2, 3, 443, 1, 2, 34, 54];
console.log(selectionSort(aInput));
// spliter - will be I Loop
// loop 
// swap

function selectionSort(aInput) {
  for (var i = 0; i < aInput.length - 1; i++) {
    for (var j = i; j < aInput.length - 1; j++) {
      var temp;
      if (aInput[j + 1] < aInput[i]) {
        temp = aInput[i];
        aInput[i] = aInput[j + 1];
        aInput[j + 1] = temp;
      }
    }
  }

  return aInput;
}
