function testVariable() {
    debugger
    var strText = document.getElementById("Nama").value;
    var strText1 = document.getElementById("Email").value;
    var strText2 = document.getElementById("Pilihan").value;
    var strText3 = document.getElementById("Keterangan").value;
    if (strText === "") {
        alert("Please fill out the Full Name field.");
        document.getElementById("P1").style.color = "red";
        document.getElementById("P1").style.fontFamily = "Arial";
        document.getElementById("P1").style.fontSize = "larger"; 
    }
    else {
        document.getElementById("displayName").innerHTML = strText;
        document.getElementById("displayEmail").innerHTML = strText1;
        document.getElementById("displayPaket").innerHTML = strText2;
        document.getElementById("displayKeterangan").innerHTML = strText3;
    }
}