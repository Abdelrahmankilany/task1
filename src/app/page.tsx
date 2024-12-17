import styles from "./page.module.css";

export default async function Home() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "no-store",
  });
  const posts = await response.json();
  const postsinfo = posts.map((post) => {
    return (
      <div
        key={post.id}
        style={{
          width: "100%",
          background: "white",
          padding: "10px",
          borderRadius: "10px",
          margin: "10px",
          color: "black",
        }}>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
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
        {postsinfo}
      </div>
    </div>
  );
}
