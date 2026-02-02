for (let i = 0; i < 40; i++) {
  const c = document.createElement("div");
  c.className = "crystal";
  c.style.left = Math.random() * 100 + "vw";
  c.style.animationDuration = 4 + Math.random() * 6 + "s";
  c.style.opacity = Math.random();
  document.body.appendChild(c);
}
