for (let i = 0; i < 8; i++) {
  setTimeout(() => {
    document.getElementById(`${i}`).style.display = "block"
  }, i * 1300 || 500);
}
function boom() {
  for (let i = 0; i <14; i++) {
setTimeout(() => { document.getElementById(`${i}`).style.display = "ruby-text"}, i*150 || 100);
  }
}