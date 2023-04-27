function testVariable() {
    debugger
    var strText = document.getElementById("Nama").value;
    var strText1 = document.getElementById("Email").value;
    var strText2 = document.getElementById("Pilihan").value;
    var strText3 = document.getElementById("Keterangan").value;
    if (strText === "") {
        alert("Please fill out the Full Name field.");
        document.getElementById("Formnama").style.color = "red";
        document.getElementById("Formnama").style.fontFamily = "Arial";
        document.getElementById("P1").style.fontSize = "larger"; 
    }
    else if(strText1 === ""){
        alert("Please fill out the Email field.");
        document.getElementById("P2").style.color = "red";
        document.getElementById("P2").style.fontFamily = "Arial";
        document.getElementById("P2").style.fontSize = "larger"; 
    }
    else {
        document.getElementById("displayName").innerHTML = strText;
        document.getElementById("displayEmail").innerHTML = strText1;
        document.getElementById("displayPaket").innerHTML = strText2;
        document.getElementById("displayKeterangan").innerHTML = strText3;
    }
}