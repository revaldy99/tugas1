function PijarFood(harga, voucher, jarak, pajak){
    harganya = harga;
    if(voucher =='PIJARFOOD5'){
        if( harga > 50000){
            vocer = harga * 0.5;
            if(vocer > 50000){
                potongan = 50000;
            }else{
                potongan = vocer;
            }
        }
    }else{
        if( harga > 25000){
            vocer = (harga * 0.6);
            if(vocer > 30000){
                potongan = 30000;
            }else{
                potongan = vocer;
            }
        }
    }
    if(jarak > 2){
        ongkir =( (jarak * 3000) - 1000);
    }else{
        ongkir = 5000;
    }
    if(pajak==true){
        pajak= (harga*0.05);
    }else{
        pajak=0;
    }
    SubTotal =  (harga - potongan + ongkir + pajak);

    console.log('Harga : ' + harga);
    console.log('Potongan : ' + potongan);
    console.log('Biaya Antar : '+ongkir);
    console.log('Pajak : '+pajak);
    console.log('Sub Total : '+SubTotal)

}
PijarFood(75000,'PIJARFOOD5', 5,true);