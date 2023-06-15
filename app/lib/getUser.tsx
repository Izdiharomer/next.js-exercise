

export default async function getUser(userId: string) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );

  if (!res.ok) throw new Error("failed to fetch");

  return res.json();
}




// export default async function getUser(userId: string) {

//   const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)

//   if (!res.ok) {
//     const errorData = await res.json();
//     throw new Error(`Failed to fetch user: ${errorData.message}`);
//   }

//   return res.json();
// }
































