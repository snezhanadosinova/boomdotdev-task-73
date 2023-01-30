import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(1);

  function onClick() {
    setCount(count + 1);
  }

  useEffect(() => {
    document.title = `Count (${count})`;
  }, [count]);

  return (
    <div className="App">
      <div>
        <button type="button" onClick={onClick}>
          Count ({count})
        </button>
      </div>
    </div>
  );
}

export default App;
