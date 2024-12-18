"use client";
import styles from "../page.module.css";
import { useState } from "react";

export default function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const addTask = () => {
    if (title && body) {
      setTasks([...tasks, { title, body }]);
      setTitle("");
      setBody("");
    } else {
      alert("Failed to submit post");
    }
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <>
      <h1>Add Post</h1>
      <div
        className={styles.post}
        style={{ display: "flex", backgroundColor: "white", maxWidth: "80%" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "90%",
          }}>
          <input
            style={{
              backgroundColor: "white",
              height: "40px",
              color: "black",
              fontSize: "20px",
              border: "none",
            }}
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder=" Title"
            required
          />
          <hr />
          <textarea
            style={{
              border: "none",
              backgroundColor: "white",
              minHeight: "70px",
              color: "black",
              fontSize: "20px",
              maxWidth: "100%",
            }}
            type="text"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            placeholder="Post"
            required
          />
        </div>
        <button style={{ width: "10%", fontSize: "30px" }} onClick={addTask}>
          +
        </button>
      </div>

      {tasks.map((task, index) => (
        <div key={index} className={styles.post}>
          <h3>{task.title}</h3>
          <hr
            style={{ height: "5px", backgroundColor: "black", width: "100%" }}
          />
          <p>{task.body}</p>
          <button onClick={() => deleteTask(index)}>Delete</button>
        </div>
      ))}
    </>
  );
}
