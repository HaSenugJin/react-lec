import React, { useEffect, useState } from "react";
function Post(props) {
  console.log("Post");
  const [page, setPage] = useState(0);
  const [post, setPost] = useState({
    userId: undefined,
    id: undefined,
    title: "",
    body: "",
  });
  function nextPage() {
    setPage(1);
  }
  async function download() {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts/3");
    let responseBody = await response.json();
    console.log("responseBody", responseBody);
    setPost(responseBody);
  }
  // 한번만 실행하겠다. 그림그려질때!!
  useEffect(() => {
    console.log("useEffect");
    download();
  }, [page]);
  return (
    <div>
      userId: {post.userId}, id: {post.id}, title: {post.title} <br />
      body: {post.body}
      <button onClick={nextPage}>다음페이지</button>
    </div>
  );
}
export default Post;