
function seleksiNilai(nilaiAwal, nilaiAkhir, dataArray){
  if(nilaiAkhir < nilaiAwal){
    return "nilai akhir harus besar dari awal";

  }else if(dataArray.length < 5){
    return" jumlah angka array haru lbih dari 5";
  }else{
    const result = [];
    for(let i = 0; i< dataArray.length; i++){
        if(dataArray[i] > nilaiAwal && dataArray[i] < nilaiAkhir){
            result.push(dataArray[i]);
        }
    }
    if(!result.length){
        return "nilai tidak ada";
    }else {
        return result;
    }
  }
}
// console.log(seleksiNilai(5,20, [2,25,4,14,17,30,8] ));
// console.log(seleksiNilai(15, 3 , [2, 25, 4, 14, 17, 30, 8]));
// console.log(seleksiNilai(5, 17 , [2, 25, 4]));
console.log(seleksiNilai(5, 17 , [2, 25, 4, 1, 30, 18]));