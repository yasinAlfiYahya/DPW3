function pilihanSilinder() {
    window.location.href = "silinder.html";
    // document.getElementById('welcome').value = "Selamat Datang " + retVal;
}

function pilihanKerucut() {
    window.location.href = "kerucut.html";
}

function pilihanBola() {
    window.location.href = "bola.html";
}

function scrollDiv() {
    var elmnt = document.getElementById('scroll');
    elmnt.scrollIntoView();
    console.log('tes');
}

const formatter = new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
});

function hitungSilinder() {
    var x = document.getElementById('perhitungan');
    var radius = document.getElementById('radius').value;
    var tinggi = document.getElementById('tinggi').value;

    document.getElementById('luas-silinder').innerHTML = "Luas Permukaan Silinder: " + num(formatter.format((2 * Math.PI * Math.pow(radius, 2) + 2 * Math.PI * radius * tinggi))) + " m" + "2".sup();
    document.getElementById('volume-silinder').innerHTML = "Volume Silinder: " + num(formatter.format((Math.PI * radius * radius * tinggi))) + " m" + "3".sup();
    if (x.style.display === 'none') {
        x.style.display = 'none';
    } else {
        x.style.display = 'block';
    }
}

function num(x) {
    return x.toString().replace(/,/g, "");
}

function hitungBola() {
    var x = document.getElementById('hasil-hitung-bola');
    var radius = document.getElementById('radius').value;

    document.getElementById('luas-bola').innerHTML = "Luas Permukaan Bola: " + num(formatter.format((4 * Math.PI * radius * radius))) + " m" + "2".sup();
    document.getElementById('volume-bola').innerHTML = "Volume Bola: " + num(formatter.format((4 / 3 * Math.PI * Math.pow(radius, 3)))) + " m" + "3".sup();

    if (x.style.display === 'none') {
        x.style.display = 'none';
    } else {
        x.style.display = 'block';
    }
}

function hitungKerucut() {
    var x = document.getElementById('hasil-hitung-kerucut');
    var radius = document.getElementById('radius').value;
    var tinggi = document.getElementById('tinggi-kerucut').value;
    var pelukisLine = document.getElementById('pelukis-line').value;

    document.getElementById('luas-kerucut').innerHTML = "Luas Permukaan Kerucut: " + num(formatter.format((Math.PI * Math.pow(radius, 2) + Math.PI * radius * pelukisLine))) + " m" + "2".sup();
    document.getElementById('volume-kerucut').innerHTML = "Volume Kerucut: " + num(formatter.format((1 / 3 * Math.PI * Math.pow(radius, 2) * tinggi))) + " m" + "3".sup();


    if (x.style.display === 'none') {
        x.style.display = 'none';
    } else {
        x.style.display = 'block';
    }

}


function time() {
    var span = document.getElementById('span');
    var d = new Date();
    var s = d.getSeconds();
    var m = d.getMinutes();
    var h = parseInt(d.getHours());
    span.innerHTML =
        ("0" + h).substr(-2) + ":" + ("0" + m).substr(-2) + ":" + ("0" + s).substr(-2) + " WIB";
}

setInterval(time, 1000);

function hari() {
    var d = new Date();
    var s = d.getSeconds();
    var m = d.getMinutes();
    var h = parseInt(d.getHours());
    var waktu = "";
    if (h >= 0 && h <= 10) {
        waktu = "Pagi";
    } else if (h >= 11 && h <= 14) {
        waktu = "Siang";
    } else if (h >= 14 && h <= 18) {
        waktu = "Sore";
    } else {
        waktu = "Malam";
    }

    return waktu;
}

function sapa() {

    var retVal = "";
    var ulang = true;
    if (ulang == true) {
        retVal = prompt("Masukkan nama untuk melanjutkan : ", "your name here");
        console.log(hari());
        document.getElementById('welcome').innerHTML = "Selamat " + hari() + " " + retVal;
        ulang = false;
    } else {
        console.log(hari());
        document.getElementById('welcome').innerHTML = "Selamat " + hari() + " " + retVal;
    }
}