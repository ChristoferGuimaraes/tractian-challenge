import React, { useContext } from "react";
import { DataContext } from "../../contexts/DataContext";

function Companies() {
  const { companies, ApiData } = useContext(DataContext);
  ApiData();
  return (
    <div className="main-container">
      <div className="margin-container">⠀</div>
      
      <div className="container-outside-table">
        <div className="title-container center"><span className="title-element">Companies</span></div>
        <table className="table-container">
          <thead>
            <tr>
              <th className="center">ID</th>
              <th className="left">Name</th>
            </tr>
          </thead>
          <tbody>
            {companies?.map((companie) => (
              <tr key={companie.id}>
                <td className="center">{companie.id}</td>
                <td className="left">{companie.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Companies;
