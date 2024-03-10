export async function getNewArrivals() {
  const res = await fetch("http://localhost:4000/new");
  const data = await res.json();
  return data;
}
