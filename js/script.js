function hasilLuas() {
    var nilaiAlas = document.getElementById("input-alas").value ;
    var nilaiTinggi = document.getElementById("input-tinggi").value ;

    var hasil = 0.5 * parseFloat(nilaiAlas) * parseFloat(nilaiTinggi) ;
    document.getElementById("rumus-luas").innerHTML = `L = 1/2 x ${nilaiAlas} x ${nilaiTinggi}`
    document.getElementById("hasilHitung").innerHTML = `L = ${hasil}`
}

function hasilKeliling() {
    var sisiA = document.getElementById("input-sisiA").value ;
    var sisiB = document.getElementById("input-sisiB").value ;
    var sisiC = document.getElementById("input-sisiC").value ;

    var hasil = parseInt(sisiA) * parseInt(sisiB) * parseInt(sisiC) ;
    document.getElementById("rumus-keliling").innerHTML = `K = ${sisiA} x ${sisiB} x ${sisiC}`
    document.getElementById("hasilKeliling").innerHTML = `K = ${hasil}`
}

function buttonResetAtas() {
    document.getElementById("input-alas").value = ""
    document.getElementById("input-tinggi").value = ""
}

function buttonResetBawah() {
    document.getElementById("input-sisiA").value = ""
    document.getElementById("input-sisiB").value = ""
    document.getElementById("input-sisiC").value = ""
}