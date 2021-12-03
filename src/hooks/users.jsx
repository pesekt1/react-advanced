import React, { useEffect, useState } from "react";
import axios from "axios";

function Users(props) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function getUsers() {
      const result = await axios("https://jsonplaceholder.typicode.com/users");
      setUsers(result.data);
    }
    getUsers();
  });

  return (
    <div>
      {users.map((u) => (
        <li key={u.id}>{u.name}</li>
      ))}
    </div>
  );
}

export default Users;
