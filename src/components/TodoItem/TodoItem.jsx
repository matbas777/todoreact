import { Button } from "../Button/Button";
import styles from "./TodoItem.module.css";

export function TodoItem({ name, done }) {
  return (
    <li className={styles.element}>
      <span className={`${styles.name} ${done ? styles.done : ""}`}>
        {name}
      </span>
      {!done && <Button>Done</Button>}
      <Button>Delete</Button>
    </li>
  );
}
