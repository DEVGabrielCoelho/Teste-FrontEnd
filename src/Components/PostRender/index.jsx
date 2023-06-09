import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchCommentsId, fetchPosts, fetchUsers } from "../../Api";
import Button from "../Button";
import { ContentPost, RouterLink, Text } from "./styled";

const PostRender = () => {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  //Recebe informações da Api como JSON
  useEffect(() => {
    const listPosts = async () => {
      const json = await fetchPosts();
      setPosts(json);
    };
    const listUsers = async () => {
      const json = await fetchUsers();
      setUsers(json);
    };
    listPosts();
    listUsers();
  }, []);

  // Função que recebe o ID e retorna o Nome do usuário, casou não haja um usuário ele retorna uma mensagem
  const getUserName = (userId) => {
    const user = users.find((user) => user.id === userId);
    return user ? user.name : "Unknown user";
  };
  const handleClick = async (postId) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) => {
        if (post.id === postId) {
          return {
            ...post,
            showComments: !post.showComments,
            comments: post.showComments ? [] : comments[postId],
          };
        }
        return post;
      })
    );
    if (!comments[postId]) {
      const json = await fetchCommentsId(postId);
      setComments((prevComments) => ({
        ...prevComments,
        [postId]: json,
      }));
    }
  };

  const [comments, setComments] = useState({});

  return (
    // o RouterLink está fazendo um redirecionamento para uma pagina contendo as informações do Usuário
    <div>
      {posts.map((post) => (
        <ContentPost key={post.id}>
          <div>
            <Text>Usuário:</Text>
            <Link to={`/users/${post.userId}`}>
              <RouterLink>{getUserName(post.userId)}</RouterLink>
            </Link>
          </div>
          <div>
            <Text>Título:</Text> {post.title}
          </div>
          <div>
            <Text>Conteúdo:</Text>
            {post.body}
          </div>
          <Button onClick={() => handleClick(post.id)}>
            {post.showComments ? "Ocultar comentários" : "Mostrar Comentários"}
          </Button>
          {post.showComments &&
            comments[post.id] &&
            comments[post.id].map((comment) => (
              <div key={comment.id}>
                <hr />
                <div>
                  <Text>Id:</Text> {comment.id}
                </div>
                <div>
                  <Text>Título:</Text> {comment.name}
                </div>
                <div>
                  <Text>Email:</Text> {comment.email}
                </div>
                <div>
                  <Text>Comentário:</Text> {comment.body}
                </div>
              </div>
            ))}
        </ContentPost>
      ))}
    </div>
  );
};

export default PostRender;
