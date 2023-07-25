import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import trash from "./trash_3980160.png";


const Container = () => {
  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([]);

  function addItem() {
    if (!newItem) {
      alert("Enter new todos...");
      return;
    }

    const item = {
      id: Math.floor(Math.random() * 1000),
      value: newItem,
      completed: false, // Default value for new todos
    };

    setItems((oldList) => [...oldList, item]);
    setNewItem("");
  }

  function deleteItem(id) {
    const newArray = items.filter((item) => item.id !== id);
    setItems(newArray);
  }

  function toggleComplete(id) {
    setItems((oldList) =>
      oldList.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  }

  return (
    <div className="container">
      <div>
        <h1 className="text-center text-danger fw-bold m-5 p-4">Todo App</h1>

        <form
          className="mb-3 w-50 d-flex mx-auto input-group"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <input
            placeholder="Enter new todo..."
            type="text"
            className="form-control"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
          />
          <button
            type="submit"
            id="addonbutton"
            className="input-group-text bg-info btn btn-primary border-0"
            onClick={() => addItem()}
          >
            Add Todo
          </button>
        </form>
      </div>

      <div>
        <h2 className="text-center text-secondary m-4">Todos📋</h2>
        <div className="w-50 d-flex mx-auto list-group">
          <ul>
            {items.map((item) => (
              <li
                key={item.id}
                style={{
                  textDecoration: item.completed ? "line-through" : "none",
                }}
              >
                <div className="checkbox-wrapper">
                  <label>
                <input
                  type="checkbox"
                  checked={item.completed}
                  onChange={() => toggleComplete(item.id)}
                />
                </label>
                </div>
                <span>{item.value}</span>
                <button onClick={() => deleteItem(item.id)}>
                  <img src={trash} alt="" width={"20px"} />
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Container;
