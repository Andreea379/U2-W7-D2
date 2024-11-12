// Exercize 1
const check = function () {
  if (localStorage.getItem("name")) {
    txt = "Ciao, " + localStorage.getItem("name");
  } else {
    txt = "No data";
  }
  document.querySelector(".userName").innerHTML = txt;
};

const save = function () {
  let userInfo = document.getElementById("name").value;
  localStorage.setItem("name", userInfo);
  check();
};

const deleteData = function () {
  localStorage.removeItem("name");
  check();
};

window.onload = check;

// Exercize 2
let i = sessionStorage.getItem("count")
  ? parseInt(sessionStorage.getItem("count"))
  : 0;

const conta = function () {
  i = i + 1;
  document.getElementById("timer").innerText =
    i + " secondi dall'apertura della pagine";
  sessionStorage.setItem("count", i);
};

setInterval(conta, 1000);
