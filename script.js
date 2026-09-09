// A lógica também está incorporada no index.html para o teste local funcionar sem dependências.
const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

musicBtn.addEventListener("click", () => {
  if (music.paused) {
    music.play();
    musicBtn.textContent = "⏸️ Pausar música";
  } else {
    music.pause();
    musicBtn.textContent = "🎵 Tocar música";
  }
});
