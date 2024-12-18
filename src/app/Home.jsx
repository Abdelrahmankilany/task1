"use client";
import { useState, useEffect } from "react";
import styles from "./page.module.css";
import PostData from "./pages/formAdd";

export default function Data() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const apiData = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
          cache: "no-store",
        }
      );
      const data = await apiData.json();
      setPosts(data);
    };

    fetchPosts();
  }, []);

  const handleDelete = (id) => {
    setPosts((e) => e.filter((post) => post.id !== id));
  };

  const postInfo = posts.map((post) => {
    return (
      <div className={styles.post} key={post.id}>
        <h2>{post.title}</h2>
        <hr
          style={{ height: "5px", backgroundColor: "black", width: "100%" }}
        />
        <p>{post.body}</p>
        <button
          onClick={() => handleDelete(post.id)}
          style={{ marginTop: "10px", padding: "5px 10px", cursor: "pointer" }}>
          Delete
        </button>
      </div>
    );
  });

  return (
    <div className={styles.page}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}>
        <PostData />
        {postInfo}
      </div>
    </div>
  );
}
