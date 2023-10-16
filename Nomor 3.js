function printTriangle(num) {

    if (!isNaN(num) ) {
        console.log("Data harus number");
      }
    
    let str = "";
    for (let i = 1; i <= num; i++) {
      for (var s = 1; s <= i; s++) {
      str += s;
      }
       str += '\n'
    }
    
   console.log(str);
  }
  printTriangle(5);