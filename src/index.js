import "./css/base.css";
import {
  addEventToToDoInput,
  addHashListenerToDocument,
} from "./js/eventsAssigner";
import { routeTo } from "./js/routes";
import { ToDos } from "./js/models/toDos";

const TODOS = new ToDos();
TODOS.loadAll();

addHashListenerToDocument(TODOS);
addEventToToDoInput(TODOS);

const newHash = new URL(document.URL).hash;
routeTo(newHash, TODOS);
