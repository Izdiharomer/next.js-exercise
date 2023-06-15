

import React from "react";
import getAllUsers from "../lib/getAllUsers";
import Link from "next/link";
import { User } from './types';




export default async function UsersPage() {
  const usersData: Promise<User[]> = getAllUsers();

  const users = await usersData;

  const content = (
    <section>
      
      
      {users.map((user) => {
        return (
          <>
            <p key={user.id}>
              <Link href={`/users/${user.id}`}> {user.name} </Link>
            </p>
            <br />
          </>
        );
      })}
      
      <br />
      <h2>
        <Link href="/">Back to Home Page</Link>
      </h2>
    </section>
  );

  return content;
}
