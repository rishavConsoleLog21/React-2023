import "./App.css";
import Todos from "./components/Tydos";

function App() {
  return (
    <div>
      <Todos items={["Learn React", "Learn Typescript"]} />
    </div>
  );
}

export default App;
