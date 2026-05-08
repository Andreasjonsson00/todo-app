const input = document.getElementById("input");
const addButton = document.getElementById("addBtn");
const list = document.getElementById("list");
const removeAllButton = document.getElementById("removeBtn");
const STORAGE_KEY = "todo-app-items";

function getStoredTodos() {
  const storedTodos = localStorage.getItem(STORAGE_KEY);

  if (!storedTodos) return [];

  try {
    const parsedTodos = JSON.parse(storedTodos);
    return Array.isArray(parsedTodos) ? parsedTodos : [];
  } catch {
    return [];
  }
}

function saveTodos() {
  const todos = Array.from(list.querySelectorAll("li")).map((item) =>
    item.firstChild.textContent.trim(),
  );

  localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
}

function createTodoItem(text) {
  const li = document.createElement("li");
  li.classList.add(
    "list-group-item",
    "d-flex",
    "justify-content-between",
    "align-items-end",
    "p-1",
  );
  li.append(document.createTextNode(text));

  const removeBtn = document.createElement("button");
  removeBtn.textContent = "Ta bort";
  removeBtn.classList.add("btn", "btn-danger", "btn-sm", "ms-2");
  li.appendChild(removeBtn);

  removeBtn.addEventListener("click", () => {
    li.remove();
    saveTodos();
  });

  return li;
}

getStoredTodos().forEach((todo) => {
  list.appendChild(createTodoItem(todo));
});

removeAllButton.addEventListener("click", () => {
  list.innerHTML = "";
  localStorage.removeItem(STORAGE_KEY);
});

addButton.addEventListener("click", () => {
  const text = input.value.trim();

  if (text === "") return;

  const li = createTodoItem(text);
  list.appendChild(li);
  saveTodos();
  input.value = "";
});
