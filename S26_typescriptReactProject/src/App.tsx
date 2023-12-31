import Todos from "./components/Todos";
import NewTodo from "./components/NewTodo";
import TodoContextProvider from "./store/todo-context";

function App() {
  return (
    <div>
      <TodoContextProvider>
        <NewTodo />
        <Todos />
      </TodoContextProvider>
    </div>
  );
}

export default App;
