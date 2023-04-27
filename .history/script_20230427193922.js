function testVariable() {
    debugger
    var strText = document.getElementById("Nama").value;
    var strText1 = document.getElementById("Email").value;
    var strText2 = document.getElementById("Pilihan").value;
    var strText3 = document.getElementById("Keterangan").value;
    document.getElementById("p1").innerHTML = strText;
    document.getElementById("p2").innerHTML = strText1;
    document.getElementById("p3").innerHTML = strText2;
    document.getElementById("displayKeterangan").innerHTML = strText3;
}