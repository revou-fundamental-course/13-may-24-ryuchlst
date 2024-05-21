function hasilLuas() {
    var nilaiAlas = document.getElementById("input-alas").value ;
    var nilaiTinggi = document.getElementById("input-tinggi").value ;

    var hasil = 0.5 * parseFloat(nilaiAlas) * parseFloat(nilaiTinggi) ;

    // console.log(2,5);
    document.getElementById('hasil').innerHTML = "L = 1/2 x " + alas +" x " +tinggi+ " = " + luas;
}