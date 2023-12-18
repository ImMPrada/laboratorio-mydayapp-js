
export class ToDo {
  constructor(title, completed = false) {
    const timestamp = new Date().getTime();
    const firstRandomPart = Math.floor(Math.random() * 100);
    const secondRandomPart = Math.floor(Math.random() * 100);

    this.id = `${firstRandomPart}${timestamp}${secondRandomPart}`;
    this.title = title;
    this.completed = completed;
  }

  markAsCompleted() {
    this.completed = true;
  }

  markAsIncomplete() {
    this.completed = false;
  }
}
