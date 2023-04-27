    function saveData() {
        var Nama = document.getElementById("Nama").value;
        var Email = document.getElementById("Email").value;
        var Pilihan = document.getElementById("Pilihan").value;
        var Keterangan = document.getElementById("Keterangan").value;
        var data = JSON.parse(localStorage.getItem("form-data")) || [];
        if(Nama === "" || Email=== "" || Pilihan ==="" Keterangan)
        data.push({ Nama: Nama, Email: Email, Pilihan: Pilihan, Keterangan: Keterangan });
        localStorage.setItem("form-data", JSON.stringify(data));
        displayData();
    }

    function displayData() {
        var data = JSON.parse(localStorage.getItem("form-data")) || [];
        var table = document.getElementById("data-table");

        // clear existing rows
        while (table.rows.length > 1) {
        table.deleteRow(-1);
        }

        // add new rows
        for (var i = 0; i < data.length; i++) {
        var row = table.insertRow(-1);
        var NamaCell = row.insertCell(0);
        var EmailCell = row.insertCell(1);
        var PilihanCell = row.insertCell(2);
        var KeteranganCell = row.insertCell(3);

        NamaCell.innerHTML = data[i].Nama;
        EmailCell.innerHTML = data[i].Email;
        PilihanCell.innerHTML = data[i].Pilihan;
        KeteranganCell.innerHTML = data[i].Keterangan;
        }
    }
    function deleteItems() {
        localStorage.clear();
    }

    displayData();