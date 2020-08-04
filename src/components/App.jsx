import React, { useState } from "react";

function App() {
  const [inputText, setText] = useState("");
  const [items, addItems] = useState([]);

  function handleChange(event) {
    setText(event.target.value);
  }
  function addItem() {
    addItems(prevValue => {
      return [...prevValue, inputText];
    });
    setText("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={inputText} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map(item => (
            <li> {item} </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
