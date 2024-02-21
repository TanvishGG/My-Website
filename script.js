for (let i = 0; i < 9; i++) {
  setTimeout(() => {
    document.getElementById(`${i}`).style.display = "block"
  }, i * 1300 || 500);
};
const colors = ["white", "black", "red", "blue", "green", "yellow", "orange"];
function boom() {
  for (let i = 0; i < 15; i++) {
    setTimeout(() => {
      const doc = document.getElementById(`${i}`);
      doc.textContent = doc.textContent.split("").sort((a, b) => 0.5 - Math.random()).join(" ");
      doc.style.display = "ruby-text";
      doc.style.position = "absolute";
      doc.style.whiteSpace = "normal";
      doc.style.fontSize = "2em";
      doc.style.lineHeight = "2.3";
      doc.style.letterSpacing = "0.5em";
      doc.style.color = colors[Math.floor(Math.random() * colors.length)];
      doc.style.textShadow = "0 0 0.5em white";
      doc.style.transition = "all 0.3s ease";
      doc.style.top = `${Math.random() * 70}%`;
      doc.style.left = `${Math.random() * 20}%`;
    }, i * 150 || 100);
  };
};