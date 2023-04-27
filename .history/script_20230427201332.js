const form = document.querySelector('form');
const savedData = document.querySelector('#saved-data');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const Nama = document.querySelector('#Nama').value;
    const Email = document.querySelector('#Email').value;
    const Pilihan = document.querySelector('#Pilihan').value;
    const Keterangan = document.querySelector('#Keterangan').value;
    localStorage.setItem('Nama', Nama);
    localStorage.setItem('Email', Email);
    localStorage.setItem('Pilihan', Pilihan);
    localStorage.setItem('Keterangan', Keterangan);
    savedData.innerHTML = `Nama: ${Nama}<br>Email: ${Email}<br>Pilihan: ${Pilihan}<br>Keterangan: ${Keterangan}`;
});

const savedNama = localStorage.getItem('Nama');
const savedEmail = localStorage.getItem('Email');
const savedPilihan = localStorage.getItem('Pilihan');
const savedKeterangan = localStorage.getItem('Keterangan');

if (savedName && savedEmail) {
    savedData.innerHTML = `Nama: ${savedNama}<br>Email: ${savedEmail}<br>Pilihan: ${Pilihan}<br>Keterangan: ${Keterangan}`;
}