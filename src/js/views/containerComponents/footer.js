import { filterLink } from "./filterLink";

export const footer = (toDos) => {
  console.log(toDos.toDos.length);
  if (toDos.toDos.length === 0) return;

  const pendingTodos = toDos.countPending();

  const footer = document.createElement("footer");
  footer.classList.add("footer");

  const span = document.createElement("span");
  span.classList.add("todo-count");
  span.innerHTML = `<strong>${pendingTodos}</strong> ${
    pendingTodos > 1 ? "items" : "item"
  } left`;

  const ul = document.createElement("ul");
  ul.classList.add("filters");

  const all = filterLink("#/all", "All", toDos.filter);
  // const all = document.createElement("li");
  // const allLink = document.createElement("a");
  // allLink.href = "#/all";
  // allLink.classList.add("selected");
  // allLink.innerHTML = "All";

  const pending = filterLink("#/pending", "Pending", toDos.filter);
  // const pending = document.createElement("li");
  // const pendingLink = document.createElement("a");
  // pendingLink.href = "#/pending";
  // pendingLink.innerHTML = "Pending";

  const completed = filterLink("#/completed", "Completed", toDos.filter);
  // const completed = document.createElement("li");
  // const completedLink = document.createElement("a");
  // completedLink.href = "#/completed";
  // completedLink.innerHTML = "Completed";

  const button = document.createElement("button");
  button.classList.add("clear-completed");
  button.id = "clear_completed_button";
  button.innerHTML = "Clear completed";
  if (toDos.countCompleted() === 0) button.hidden = true;

  // all.appendChild(allLink);
  // pending.appendChild(pendingLink);
  // completed.appendChild(completedLink);
  ul.appendChild(all);
  ul.appendChild(pending);
  ul.appendChild(completed);
  footer.appendChild(span);
  footer.appendChild(ul);
  footer.appendChild(button);

  return footer;
};
