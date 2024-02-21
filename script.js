function main() {
for (let i = 0; i < 9; i++) {
  setTimeout(() => {
    document.getElementById(`${i}`).style.display = "block"
  }, i * 1000 || 500);
};
}
const colors = ["white", "red", "blue", "green", "yellow", "orange", "skyblue", "lime", "pink"];
function boom() {
  for (let i = 0; i <= 18; i++) {
    setTimeout(() => {
      const doc = document.getElementById(`${i}`);
      doc.textContent = doc.textContent.split("").sort((a, b) => 0.5 - Math.random()).join(" ");
      doc.style.display = "ruby-text";
      doc.style.position = "fixed";
      doc.style.textDecoration = "none";
      doc.style.whiteSpace = "normal";
      doc.style.fontSize = "2em";
      doc.style.lineHeight = "2.3";
      doc.style.letterSpacing = "0.5em";
      doc.style.color = colors[Math.floor(Math.random() * colors.length)];
      doc.style.textShadow = "0 0 0.5em white";
      doc.style.top = `${Math.random() * 80}%`;
      doc.style.left = `${Math.random() * 10}%`;
      doc.style.transition = "all 2s ease";
    }, i * 150 || 100);
  };
};
function redirect(url) {
   window.location.href = url;
}