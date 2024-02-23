for (let i = 0; i < 9; i++) {
  setTimeout(() => {
    document.getElementById(`${i}`).style.display = "block"
  }, i * 1500 || 500);
};

const colors = ["white", "red", "blue", "green", "yellow", "orange", "skyblue", "lime", "pink"];
function boom() {
  for (let i = 0; i <= 17; i++) {
 let doc = document.getElementById(`${i}`)
  doc.style.animation = "wiggle 1s"
  doc.style[`animation-iteration-count`] = "infinite";
    setTimeout( () => { 
      doc.textContent = doc.textContent.split("").sort((a, b) => 0.5 - Math.random()).join(" ");
      doc.style.display = "ruby-text";
      doc.style.position = "fixed";
      doc.style.textDecoration = "none";
      doc.style.whiteSpace = "normal";
      doc.style.fontSize = "2em";
      doc.style.lineHeight = "2.3";
      doc.draggable = "true";
      doc.style.letterSpacing = "0.5em";
      doc.style.color = colors[Math.floor(Math.random() * colors.length)];
      doc.style.textShadow = "0 0 0.5em white";
      doc.style.top = `${Math.random() * 100}%`;
      doc.style.left = `${Math.random() * 10}%`;
      doc.style.transition = "all 0.4s ease";
      doc.style.animation = "none"
    }, i * 20 + 2300);
 }
  setTimeout(() => { window.alert("ooops, i didn't mean to make the nuke button public!\nsorry :(") }, 4000)
};