const LOCAL_STORAGE_NAME = "mydayapp-js";

export const readAllToDos = () => {
  const storedTodos = getFromLocal();

  if (storedTodos) {
    try {
      return JSON.parse(storedTodos);
    } catch (error) {
      console.error('Error parsing stored data:', error);
    }
  }

  return [];
};

export const writeAllToDos = (toDos) => {
  const toDosToAdd = toDos.map(toDo => (
    {
      id: toDo.id,
      title: toDo.description,
      completed: toDo.completed
    }
  ));

  localStorage.setItem(LOCAL_STORAGE_NAME, JSON.stringify(toDosToAdd));
};

const getFromLocal = () => {
  const stored = localStorage.getItem(LOCAL_STORAGE_NAME);
  if (stored) return stored;

  localStorage.setItem(LOCAL_STORAGE_NAME, JSON.stringify([]));
  return [];
}
