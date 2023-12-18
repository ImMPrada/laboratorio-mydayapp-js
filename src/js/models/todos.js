import * as storage from "../storage.js";
import { ToDo } from "./toDo.js";

export const ALL_FILTER = "#/all";
export const COMPLETED_FILTER = "#/completed";
export const PENDING_FILTER = "#/pending";

export class ToDos {
  constructor() {
    this.toDos = [];
    this.filter = "";
    this.filteredToDos = [];
  }

  loadAll() {
    this.toDos = storage.readAllToDos();
  }

  filterBy(filter) {
    this.filter = filter;

    if (filter === COMPLETED_FILTER) {
      this.filteredToDos = this.toDos.filter((todo) => todo.completed === true);
      return;
    }

    if (filter === PENDING_FILTER) {
      this.filteredToDos = this.toDos.filter(
        (todo) => todo.completed === false
      );
      return;
    }

    this.filter = null;
    this.filteredToDos = this.toDos;
  }

  destroyById(id) {
    this.toDos = this.toDos.filter((todo) => todo.id !== id);
    storage.writeAllToDos(this.toDos);

    this.filterBy(this.filter);
  }

  toggleCompletedById(id) {
    this.toDos = this.toDos.map((todo) => {
      if (todo.id === id) todo.completed = !todo.completed;
      return todo;
    });
    storage.writeAllToDos(this.toDos);

    this.filterBy(this.filter);
  }

  addTodo(title) {
    const toDo = new ToDo(title);

    this.toDos.push(new ToDo(title));
    storage.writeAllToDos(this.toDos);
    return toDo;
  }
}
