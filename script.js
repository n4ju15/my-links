const chk = document.getElementById("chk");
const containerText = document.querySelector(".container_text");
const paragrafo = document.querySelector(".function");
const rodape = document.getElementsByTagName("footer")[0];

// Verifique o valor na Local Storage e defina o modo com base nele
const isLightModeEnabled = localStorage.getItem("mode") === "light";

// Aplicar o modo com base na verificação
if (isLightModeEnabled) {
  document.body.classList.add("light");
  containerText.classList.add("light");
  paragrafo.classList.add("light");
  rodape.classList.add("light");
}

chk.addEventListener("change", () => {
  document.body.classList.toggle("light");
  containerText.classList.toggle("light");
  paragrafo.classList.toggle("light");
  rodape.classList.toggle("light");

  // Atualize o valor na Local Storage com base na nova condição
  if (document.body.classList.contains("light")) {
    localStorage.setItem("mode", "light");
  } else {
    localStorage.setItem("mode", "dark");
  }
});
