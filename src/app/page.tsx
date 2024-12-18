// import styles from "./page.module.css";
// import PostData from "./pages/posts";

// export default async function Home() {
//   const apiData = await fetch("https://jsonplaceholder.typicode.com/posts", {
//     cache: "no-store",
//   });
//   const posts = await apiData.json();
//   const postInfo = posts.map((post) => {
//     return (
//       <div className={styles.post} key={post.id}>
//         <h2>{post.title}</h2>
//         <hr
//           style={{ height: "5px", backgroundColor: "black", width: "100%" }}
//         />
//         <p>{post.body}</p>
//       </div>
//     );
//   });
//   return (
//     <div className={styles.page}>
//       <div
//         style={{
//           display: "flex",
//           flexDirection: "column",
//           justifyContent: "center",
//           alignItems: "center",
//         }}>
//         <PostData />
//         {postInfo}
//       </div>
//     </div>
//   );
// }
import Data from "./Home";
export default function Home() {
  return (
    <div>
      <Data />
    </div>
  );
}
