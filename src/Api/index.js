/*
● Listagem de posts:
  https://jsonplaceholder.typicode.com/posts
● Listagem de comentários de um post:
  https://jsonplaceholder.typicode.com/posts/[ID]/comments
● Listagem de usuários:
  https://jsonplaceholder.typicode.com/users
● Detalhes de um usuário:
  https://jsonplaceholder.typicode.com/users/[ID]
*/

export async function fetchUsers() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const json = await response.json();
  return json;
}

export async function fetchPosts() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const json = await response.json();
  return json;
}

export async function fetchComments() {
  const response = await fetch("https://jsonplaceholder.typicode.com/comments");
  const json = await response.json();
  return json;
}
