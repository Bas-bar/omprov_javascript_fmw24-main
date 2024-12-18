// 6. Todos (5p)

// Skapa en lista med TODOs som hämtas från: https://jsonplaceholder.typicode.com/todos
// Listan ska placeras i div-elementet med id todos på index.html

// Visa de första 10 TODOs i listan.
// För varje TODO ska följande visas:
// Titeln på TODO:n
// Om den är klar eller inte "completed" eller "not completed"
// Markera TODOs som är klara genom att visa dem med en grön textfärg.

const todosEl = document.querySelector("todos");

async function gettodos() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await response.json();

  data.forEach((todo) => {
    const div = document.createElement("div");
    div.setAttribute("class", "todo");
    div.innerHTML = `<h2>${todo.title}</h2><p>`;

    todosEl.appendChild(div);
  });
}
gettodos();
