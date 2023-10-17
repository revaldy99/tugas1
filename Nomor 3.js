


let printSegitiga = '5';
let hasil = "";
if (isNaN (printSegitiga) ) {
          console.log("Data harus number");
}else{
  
  for (let i = 1; i <= printSegitiga; i++) {
    for (var s = 1; s <= i; s++) {
      hasil += s;
    }
    hasil += '\n'
  }
}

console.log(hasil);


