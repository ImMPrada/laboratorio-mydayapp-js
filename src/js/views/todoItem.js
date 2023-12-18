import * as controller from "../controller";

export const todoItem = (toDo, toDos) => {
  const deleteItem = (id) => {
    controller.destroy(id, toDos);
  };

  const toggleCompletedState = (id, completedState) => {
    controller.update(id, { completed: !completedState }, toDos);
  };

  const li = document.createElement("li");
  toDo.completed ? li.classList.add("completed") : null;

  const div = document.createElement("div");
  div.classList.add("view");

  const checkbox = document.createElement("input");
  checkbox.classList.add("toggle");
  checkbox.type = "checkbox";
  checkbox.checked = toDo.completed;
  checkbox.addEventListener("change", () =>
    toggleCompletedState(toDo.id, toDo.completed)
  );

  const label = document.createElement("label");
  label.textContent = toDo.title;

  const button = document.createElement("button");
  button.classList.add("destroy");
  button.addEventListener("click", () => deleteItem(toDo.id));

  const input = document.createElement("input");
  input.classList.add("edit");
  input.value = "Learn JavaScript";

  div.appendChild(checkbox);
  div.appendChild(label);
  div.appendChild(button);

  li.appendChild(div);
  li.appendChild(input);

  return li;
};
