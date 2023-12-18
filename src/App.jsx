import styles from "./App.module.css";
// import { Button } from "./components/Button/Button";
import { Form } from "./components/Form/Form";
import { TodoItem } from "./components/TodoItem/TodoItem";

function getSubheading(numberOfTasks) {
  switch (true) {
    case numberOfTasks > 4:
      return `${numberOfTasks} zadań`;
    case numberOfTasks < 4 || numberOfTasks > 1:
      return `${numberOfTasks} zadania`;
    case numberOfTasks === 1:
      return `${numberOfTasks} zadanie`;
    case numberOfTasks === 0:
    default:
      return "Brak zadań";
  }
}

function App() {
  const todos = [
    { name: "Kurs zrozum React", done: false, id: 1 },
    { name: "Zjeść śniadanie", done: true, id: 2 },
    { name: "Umyć plecy", done: false, id: 3 },
    { name: "Umyć plecy", done: false, id: 3 },
    { name: "Umyć plecy", done: false, id: 3 },
    { name: "Umyć plecy", done: false, id: 3 },
  ];

  const reviewsTasks = todos.map(({ id, name, done }) => (
    <TodoItem key={id} name={name} done={done} />
  ));

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div>
          <h1>Do zrobienia</h1>
          <h2>{getSubheading(todos.length)}</h2>
        </div>
        <button className={styles.btnAddTask}>+</button>
      </header>
      <Form />
      <ul>{reviewsTasks}</ul>
    </div>
  );
}

export default App;
