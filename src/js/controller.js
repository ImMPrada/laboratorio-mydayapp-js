import * as view from "./views/todoList";
import { COMPLETED_FILTER } from "./models/toDos";

export const index = (filter, toDos) => {
  toDos.loadAll();
  toDos.filterBy(filter);

  view.renderNewList(toDos);
};

export const create = (title, toDos) => {
  const toDo = toDos.addTodo(title);
  console.log(toDos);
  if (toDos.filter === COMPLETED_FILTER) return;

  view.renderAppendList(toDo, toDos);
};

export const destroy = (id, toDos) => {
  toDos.destroyById(id);
  view.renderNewList(toDos);
};

export const destroyCompleted = (toDos) => {
  toDos.destroyCompleted();
  view.renderNewList(toDos);
};

export const update = (id, payload, toDos) => {
  toDos.updateById(id, payload);
  view.renderNewList(toDos);
};
