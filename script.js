// 1. Membuat Teks (Manipulasi Element)
const judul = document.getElementById('judul'); // Deklarasi Variabel 
changeText.innerText = "Membuat Teks (No. 1)"; // innerHTML

// 2. Membuat Element (Manipulasi Node)
let newElement = document.createElement("p"); // Deklarasi Variabel untuk membuat elements
newElement.innerHTML = "Menambah Elemen Baru (No. 2)";
changeText.appendChild(newElement);
div.appendChild(teksDiv); // Fungsi untuk memasukkan isi teks kedalam element yg telah dibuat
const cetak = document.getElementById('body'); // Deklarasi Variabel untuk mencetak element yg telah dibuat
cetak.appendChild(div); // Fungsi untuk mencetak element yg telah dibuat

//Nomor 3
function hidepesan () {
    var hide = document.getElementById("input")
    if (hide.style.display === "block"){
        hide.style.display = "none"
    }else {
        hide.style.display = "block";
    }
}
function getPesan() {
    var ambil = document.getElementById("pesan").value;
    document.getElementById("output").innerHTML = ambil;

}

document.getElementById("incrementButton").addEventListener("click", increment);