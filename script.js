const input = document.getElementById("input");
const button = document.getElementById("addBtn");
const list = document.getElementById("list");

button.addEventListener("click", () => {
  const text = input.value.trim();

  if (text === "") return;

  const li = document.createElement("li");
  li.classList.add(
    "list-group-item",
    "d-flex",
    "justify-content-between",
    "align-items-end",
    "p-1",
  );
  li.textContent = text;
  list.appendChild(li);

  const removeBtn = document.createElement("button");
  removeBtn.textContent = "Ta bort";
  removeBtn.classList.add("btn", "btn-danger", "btn-sm", "ms-2");
  li.appendChild(removeBtn);

  removeBtn.addEventListener("click", () => {
    li.remove();
  });

  input.value = "";
});
