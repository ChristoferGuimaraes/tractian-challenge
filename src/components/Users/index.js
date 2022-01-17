import React, {useContext} from "react";
import { DataContext } from "../../contexts/DataContext";

function Users() {
  const { users, ApiData } = useContext(DataContext);
  ApiData()
  return (
    <div className="main-container">
      <div className="margin-container">⠀</div>
      
      <div className="container-outside-table">
      <div className="title-container center">
        <span  className="title-element">Users</span>
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
    </div>
  );
}

export default Users;
