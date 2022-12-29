// Import react and its dependencies
import { createContext, useEffect, useLayoutEffect, useState } from "react";

// Import outlet from react router dom
import { Outlet } from "react-router-dom";

// Import components
import Header from './components/Header/Header';

// Import css
import "./App.scss";

// Import bootstrap
import bootstrap from "bootstrap/dist/js/bootstrap.bundle";

const TodosProvider = createContext();

function App() {
  const [todos, setTodos] = useState([]);

  // Enable bootstrap tooltips
  useLayoutEffect(() => {
    const toolTipTriggerList = document.querySelectorAll(
      '[data-bs-toggle="tooltip"]'
    );
    [...toolTipTriggerList].forEach(
      (toolTipTriggerEl) => new bootstrap.Tooltip(toolTipTriggerEl)
    );
  }, []);

  // Get the todos from the local storage
  useEffect(() => {
    const todos = localStorage.getItem("todos");

    if (todos) {
      setTodos(JSON.parse(todos));
    }
  }, []);

  return (
    <div className="App">
      <Header />
      <TodosProvider.Provider value={[ todos, setTodos ]}>
        <Outlet />
      </TodosProvider.Provider>
    </div>
  );
}

export { TodosProvider };
export default App;
