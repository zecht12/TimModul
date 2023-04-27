function saveData() {
  var Nama = document.getElementById("Nama").value;
  var Email = document.getElementById("Email").value;
  var Pilihan = document.getElementById("Pilihan").value;
  var Keterangan = document.getElementById("Keterangan").value;
  var data = JSON.parse(getItems()) || [];

  if (!(Nama.length || Email.length || Pilihan.length || Keterangan.length)) {
    alert("Tolong isi dengan benar ya!!!");
  } else {
    data.push({
      Nama: Nama,
      Email: Email,
      Pilihan: Pilihan,
      Keterangan: Keterangan,
    });

    setItems(data);
    displayData();
  }
}

function displayData() {
  var data = JSON.parse(getItems()) || [];
  var table = document.getElementById("data-table");
  var btn = document.getElementById("show-data");

  if (data.length) {
    btn.style = "display: none;";
  } else {
    alert("Data masih kosong");
  }

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

function setItems(data, name = "form-data") {
  if (!Array.isArray(data)) throw new Error("Data bukan array");
  localStorage.setItem(name, JSON.stringify(data));
}

function deleteItems(name = "form-data") {
  localStorage.removeItem(name);
}

function getItems(name = "form-data") {
  if (typeof name !== "string")
    throw new Error("Nama item bukan berbentuk string");
  return localStorage.getItem(name);
}
