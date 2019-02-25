let userPrintString = (data, str, arr, finalData) => {
  if (data === str) {
    arr.push(finalData);
  }
}

let userPrintArray = (data, str, arr, finalData) => {
  for (var i = 0; i < data.length; i++) {
    if (data[i].trim() === str) {
      arr.push(finalData);
    }
  }
}