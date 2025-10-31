let button = document.getElementById("button");

button.addEventListener("click", async () => {
  const response = await fetch("expression.txt");
  const expression = await response.text();

  const p = document.createElement("p");
  p.textContent = expression;
  document.body.append(p);
});
