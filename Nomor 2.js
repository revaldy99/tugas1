let bahasaIndonesia = 90;
let bahasaInggris = 89;
let ipa = 69;
let mtk = 80;
let un = "";
rataRata = (mtk+bahasaIndonesia+bahasaInggris+ipa) / 4;


if (rataRata >= 90 ){
un = "A" ;

}
else if (rataRata >= 80){
    un = "B" ;
}
else if (rataRata >=70){
    un = "C" ;
}
else if (rataRata >= 60){
    un = "D" ;
} 
else {
    un = "E" ;
}
console.log("Rata Rata : "+rataRata);
console.log ("Grade :" +un) ;
