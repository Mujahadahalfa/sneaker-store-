const txtElement = ["Slip-on sneakers", "Dad sneakers", "Plimsoll sneakers", "High sneakers", "Retro runners sneakers", "Knit sneakers", " Leather sneakers", "Colorblock sneakers", "Velcro sneakers", "Athletic kicks"];
let count = 0;
let txtIndex = 0;
let currentTxt = "";
let words = "";

(function ngetik() {
  if (count == txtElement.length) {
    count = 0;
  }

  currentTxt = txtElement[count];

  words = currentTxt.slice(0, ++txtIndex);
  document.querySelector(".efek-ngetik").textContent = words;

  if (words.length == currentTxt.length) {
    count++;
    txtIndex = 0;
  }

  setTimeout(ngetik, 500);
})();

function logout() {
    // Logika untuk menghapus session atau token pengguna
    // Redirect ke halaman login atau halaman awal
    window.location.href = 'login.html'; // Ganti 'login.html' dengan URL halaman login Anda
}
