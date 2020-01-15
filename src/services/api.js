export function fetchUsers(page = 1) {
  return fetch(
    `https://mock-io.herokuapp.com/users?_page=${page}&_limit=10`
  ).then(res => res.json());
}
