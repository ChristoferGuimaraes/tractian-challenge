import { useState, useEffect } from "react";
import api from "../../services/api/index";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    api.get("db").then(({ data }) => {
      setUsers(data.users);
      console.log(data);
    });
  }, []);

  return (
    <div className="main-container">
      <div className="margin-container">⠀</div>
      <div className="title-container">
        Users
      </div>
      <table className="table-container">
        <thead>
          <tr>
            <th className="center">ID</th>
            <th className="left">Name</th>
            <th className="left">E-mail</th>


          </tr>
        </thead>
        <tbody>
          {users?.map((user) => (
            <tr key={user.id}>
              <td className="center">{user.id}</td>
              <td className="left">{user.name}</td>
              <td className="left">{user.email}</td>
              
            
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Users;
