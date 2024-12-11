let todos = ["geree tseverleh", "hool hiih", "hicheel hiih", "kino uzeh"];
const button = document.getElementById("button");
const input = document.getElementById("input");
input.addEventListener("input", (event) => {
  console.log(event.target.value);
});
button.addEventListener("click", (event) => {
  todos.push(input.value);
  renderTodos();
});

function renderTodos() {
  const tasklist = document.getElementById("tasklist");
  tasklist.innerHTML = null;
  input.value = null;
  todos.sort().map((todo) => {
    const p = document.createElement("p");
    p.innerText = todo;
    tasklist.appendChild(p);
  });
}
