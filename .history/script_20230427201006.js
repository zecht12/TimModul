const form = document.querySelector('form');
const savedData = document.querySelector('#saved-data');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const Nama = document.querySelector('#Nama').value;
    const Email = document.querySelector('#Email').value;
    const Email = document.querySelector('#Email').value;
    localStorage.setItem('Nama', Nama);
    localStorage.setItem('Email', Email);
    savedData.innerHTML = `Nama: ${Nama}<br>Email: ${Email}`;
});

function testVariable() {
    debugger
    var strText = document.getElementById("Nama").value;
    var strText1 = document.getElementById("Email").value;
    var strText2 = document.getElementById("Pilihan").value;
    var strText3 = document.getElementById("Keterangan").value;
    if (strText === "") {
        alert("Tolong isi nama anda");
        document.getElementById("Formnama").style.color = "red";
        document.getElementById("Formnama").style.fontFamily = "Arial";
        document.getElementById("Formnama").style.fontSize = "larger"; 
    }
    else if(strText1 === ""){
        alert("Tolong isi email anda");
        document.getElementById("Formemail").style.color = "red";
        document.getElementById("Formemail").style.fontFamily = "Arial";
        document.getElementById("Formemail").style.fontSize = "larger"; 
    }
    else if(strText2 === ""){
        alert("Tolong pilihlah pilihan yang tesedia");
        document.getElementById("Pilihan").style.color = "red";
        document.getElementById("Pilihan").style.fontFamily = "Arial";
        document.getElementById("Pilihan").style.fontSize = "larger"; 
    }
    else if(strText3 === ""){
        alert("tolong isi keterangan produk anda");
        document.getElementById("Keterangan").style.color = "red";
        document.getElementById("Keterangan").style.fontFamily = "Arial";
        document.getElementById("Keterangan").style.fontSize = "larger"; 
    }
    else {
        document.getElementById("displayName").innerHTML = strText;
        document.getElementById("displayEmail").innerHTML = strText1;
        document.getElementById("displayPaket").innerHTML = strText2;
        document.getElementById("displayKeterangan").innerHTML = strText3;
    }
}