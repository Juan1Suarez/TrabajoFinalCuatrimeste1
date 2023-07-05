const input = document.querySelector("input");
const añadirboton = document.querySelector(".añadirboton");
const ul = document.querySelector("ul");
const tareaspe = document.querySelector(".tareaspe");

añadirboton.addEventListener("click", (e) => {
  e.preventDefault();

  const text = input.value;

  if (text !== "") {
    const li = document.createElement("li");
    const p = document.createElement("p");
    p.textContent = text;

    li.appendChild(p);
    li.appendChild(añadirbotonborrar());
    ul.appendChild(li);

    input.value = "";
    tareaspe.style.display = "none";
  }
});

function añadirbotonborrar() {
  const botonborrar = document.createElement("button");

  botonborrar.textContent = "X";
  botonborrar.className = "botonborrar";

  botonborrar.addEventListener("click", (e) => {
    const item = e.target.parentElement;
    ul.removeChild(item);

    const items = document.querySelectorAll("li");

    if (items.length === 0) {
      tareaspe.style.display = "block";
    }
  });

  return botonborrar;
}
