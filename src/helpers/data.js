export async function getNewArrivals() {
  const res = await fetch("http://localhost:4000/new");
  const data = await res.json();
  return data;
}

export async function getUsers() {
  const res = await fetch("http://localhost:7000/users");
  const data = await res.json();
  return data;
}
