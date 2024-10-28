import { useState } from "react";
import { Todos } from "./components/Todos";
import { TodoId } from "./types";

const mockTodos = [
  { id: 0, title: "Ver Twitch de midu", completed: false },
  { id: 1, title: "Aprender logica de frontend", completed: false },
  { id: 2, title: "Sacar ticket", completed: false },
];

const App = (): JSX.Element => {
  const [todos, setTodos] = useState(mockTodos);

  const handleRemove = ({ id }: TodoId): void => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  return (
    <div className="todoapp">
      <Todos onRemoveTodo={handleRemove} todos={todos} />
    </div>
  );
};

export default App;
