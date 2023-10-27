const divide = (angka) => {
    if (typeof angka === "number") {
      const splitAngka= (angka + "").split("0");
      const sortAngka= splitAngka.map((item) => item.split("").sort().join(""));
      const hasil = Number(sortAngka.join(""));
      console.log(hasil);
    } else {
      console.log("data harus number");
    }
  };
  
  divide(5956560159466056);