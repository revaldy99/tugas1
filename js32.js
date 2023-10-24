const getMonth=(callback)=>{
    setTimeout(()=>{
        let error = false;
        let month = ["january","february","maret","april","may","june","july","agustus","september","oktober","november","december"];

        if(!error){
            callback(null, month);
        }else {
            callback(new Error("sorry data not Found"))
        }
    }, 4000);
}

// getMonth((month) => {
//     console.log(month);
//   });
function usersCallback(month) {
    console.log(month);
  }
   
  getMonth(usersCallback);