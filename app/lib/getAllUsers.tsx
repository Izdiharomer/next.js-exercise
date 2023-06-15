export default async function getAllUsers() {
  //fetch
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  //catch error

  if (!res.ok) throw Error("Failed to fetch data");

  //turn into json
  return res.json();
}
