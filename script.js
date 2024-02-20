for (let i = 0; i < 9; i++) {
  setTimeout(() => {
    document.getElementById(`${i}`).style.display = "block"
  }, i * 1300 || 500);
}
function boom() {
  for (let i = 0; i < 15; i++) {
    setTimeout(() => {
      const doc = document.getElementById(`${i}`)
      doc.textContent = doc.textContent.split("").sort((a, b) => 0.5 - Math.random()).join(" ")
      doc.style.display = "ruby-text"
    }, i * 150 || 100);
  }
}