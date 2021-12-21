import { useState, useEffect } from "react";
import api from "../../services/api/index";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    api.get("db").then(({ data }) => {
      setUsers(data.users);
      console.log(data);
    });
    console.log(users);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="App">
      <h1 className="center">Users</h1>
      <table border="1" className="table-container">
        <thead>
          <tr>
            <th className="center">ID</th>
            <th>Name</th>
            <th>E-mail</th>
            <th className="center">Unit ID</th>
            <th className="center">Company ID</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((user) => (
            <tr key={user.id}>
              <td className="center">{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td className="center">{user.unitId}</td>
              <td className="center">{user.companyId}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Users;
