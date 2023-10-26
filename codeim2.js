

  function balikKata(kata) {
    let reverseWord = kata.split(" ").map(word => word.split("").reverse().join(""));
    hasil =  reverseWord.join(" ");
    console.log(hasil);
  }

  balikKata('Saya belajar Javascript');





  // function balikKata (kata) {
//     hasil =  kata.split("").reduce((acc, char) => char + acc, "");
//     console.log(hasil);
//   }
//   balikKata('Saya belajar Javascript');
