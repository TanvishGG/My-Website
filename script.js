for (let i = 0; i < 8; i++) {
  setTimeout(() => {
    document.getElementById(`${i}`).style.display = "block"
  }, i * 1500 || 500);
}