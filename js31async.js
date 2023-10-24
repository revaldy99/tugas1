

async function cekHariKerja(day){ 
   
    try{
        //ini kondisi terpenuhi

        const dataDay =['senin','selasa','rabu','kamis','jumat'];
            let cek = dataDay.find((item)=>{
                return item === day;
            })
            if(cek){
                console.log(cek);
            }else{
                console.log('Hari ini bukan hari kerja');
                
            }
    }catch(error){
        //jika kondisinya tidak terpenuhi tampilkan catch errornya
        console.log(error.message);
    }
}
cekHariKerja('senin');