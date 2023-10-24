async function nonton(film) {
    try {
      if(film > 0){
        console.log('ayo kita nonton');
        
      }
      else{
        console.log('filem tidak ada');
      }
   
      
    } catch (error) {
      console.log(error.message);
    }
  }
   
  nonton(10);

  