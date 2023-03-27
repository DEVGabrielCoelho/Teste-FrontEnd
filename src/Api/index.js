// Api de Usuários
export async function fetchUsers() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const json = await response.json();
  return json;
}

// Api de seleção do usuário por ID
export async function fetchUsersId(id) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  const json = await response.json();
  return json;
}

// Api de Posts
export async function fetchPosts() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const json = await response.json();
  return json;
}

// Api de seleção de comentários por ID em cada posts
export async function fetchCommentsId(id) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}/comments`
  );
  const json = await response.json();
  return json;
}
