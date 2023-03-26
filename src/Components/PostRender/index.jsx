import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ContentPost, RouterLink, Text } from "./styled";

const PostRender = () => {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchPosts();
    fetchUsers();
  }, []);

  const fetchPosts = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const json = await response.json();
    setPosts(json);
  };

  const fetchUsers = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const json = await response.json();
    setUsers(json);
  };

  const getUserName = (userId) => {
    const user = users.find((user) => user.id === userId);
    return user ? user.name : "Unknown user";
  };

  return (
    <div>
      {posts.map((post) => (
        <ContentPost key={post.id}>
          <div>
            {" "}
            <Text>Usuário:</Text>
            <Link to={`/users/${post.userId}`}>
              {" "}
              <RouterLink>{getUserName(post.userId)}</RouterLink>
            </Link>
          </div>
          <div>
            {" "}
            <Text>Titulo:</Text> {post.title}
          </div>
          <div>
            {" "}
            <Text>Comentário:</Text>
            {post.body}
          </div>
        </ContentPost>
      ))}
    </div>
  );
};

export default PostRender;
