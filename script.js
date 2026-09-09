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

document.addEventListener("DOMContentLoaded", () => {
  const music = document.getElementById("bgMusic");
  const musicBtn = document.getElementById("musicBtn");

  if (!music || !musicBtn) return;

  musicBtn.addEventListener("click", async () => {
    try {
      if (music.paused) {
        await music.play();
        musicBtn.textContent = "⏸️ Pausar música";
      } else {
        music.pause();
        musicBtn.textContent = "🎵 Tocar música";
      }
    } catch (error) {
      console.error("Erro ao reproduzir a música:", error);
      musicBtn.textContent = "❌ Erro ao tocar";
    }
  });
});
