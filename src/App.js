import React, {useState, useRef, useEffect} from 'react';

export function App() {
  const [todos, setTodos] = useState([]);
  const todoText = useRef();

  useEffect(() => {
    const existingTodos = localStorage.getItem('todos');
    setTodos(existingTodos ? JSON.parse(existingTodos) : []);
  }, []);
  function newTodo(event) {
    event.preventDefault();
    const next = [...todos, todoText.current.value];
    setTodos(next);
    localStorage.setItem('todos', JSON.stringify(next));
  }
  return (
    <div>
      <ul>
        {todos.map(todo => (
          <li key={todo}>{ todo }</li>
        ))}
      </ul>
      <form onSubmit={newTodo}>
        <input ref={todoText} />
        <input type="submit" value="New Todo..."/>
      </form>
    </div>
  );
}

export default App;
