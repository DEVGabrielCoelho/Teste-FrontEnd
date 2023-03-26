import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchPosts, fetchUsers } from "../../Api";
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
        </ContentPost>
      ))}
    </div>
  );
};

export default PostRender;
