function checkPalindrom (kata) {
  hasil =  kata == kata.split('').reverse().join('');
  if(hasil == true){
    console.log('kata ini adalah polindrome');
  }else{
    console.log('bukan polindrome')
  }
}
checkPalindrom('Malam')