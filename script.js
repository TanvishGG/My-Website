for (let i = 0; i < 9; i++) {
  setTimeout(() => {
    document.getElementById(`${i}`).style.display = "block"
  }, i * 1500 || 500);
};

const colors = ["white", "red", "blue", "green", "yellow", "orange", "skyblue", "lime", "pink"];
function boom() {
  function repeat() {
    for (let i = 0; i <= 17; i++) {
      setTimeout(() => {
        let doc = document.getElementById(`${i}`)
        doc.textContent = doc.textContent.split("").sort((a, b) => 0.5 - Math.random()).join(" ");
        doc.style.display = "ruby-text";
        doc.style.position = "fixed";
        doc.style.textDecoration = "none";
        doc.style.whiteSpace = "normal";
        doc.style.fontSize = "2em";
        doc.style.letterSpacing = "0.5em";
        doc.style.color = colors[Math.floor(Math.random() * colors.length)];
        doc.style.textShadow = "0 0 0.5em white";
        doc.style.top = `${Math.random() * 80}%`;
        doc.style.transform = `rotateZ(${Math.floor(Math.random() * 360)}deg)`;
        doc.style.transition = "all 0.4s ease";
      }, i * 20 ?? 10);
    }
  }
  repeat()
  setTimeout(() => { window.alert("ooops, i didn't mean to make the nuke button public!\nsorry :(") }, 2_000)
  setInterval(repeat, 4_500)
};