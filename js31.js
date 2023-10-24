const cekHariKerja = (day)=>{
    return new Promise ((resolve, reject)=>{
        setTimeout(()=>{
            const dataDay =['senin','selasa','rabu','kamis','jumat']
            let cek = dataDay.find((item)=>{
                return item === day;
            })
            if(cek){
                resolve(cek);
            }else{
                reject(new Error('Hari ini bukan hari kerja'));
                return;
            }
        }),3000
    })
}
//penerapan promise then catch
cekHariKerja('senin')
  .then(dataDay => console.log(dataDay))
  //nilai yang dibawa oleh  resolve() ditampilkan dg fungsi then. akan menampilkan nilai dataDay
  .catch(err => console.log(err.message));
  //nilai yang dibawa oleh  reject() / error ditampilkan dg fungsi catch