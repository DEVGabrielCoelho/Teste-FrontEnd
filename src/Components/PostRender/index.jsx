import React, { useEffect, useState } from "react";
import { ContentPost } from "./styled";

const PostRender = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    listPosts();
  }, []);

  const listPosts = async () => {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts");
    let json = await response.json();
    setPosts(json);
  };

  return (
    <div>
      {posts.map((item) => (
        <ContentPost key={item.id}>
          <div> User: {item.userId}</div>
          <div> Titulo: {item.title}</div>
          <div> Comentário: {item.body}</div>
        </ContentPost>
      ))}
    </div>
  );
};

export default PostRender;
