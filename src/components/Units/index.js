import React, { useContext } from "react";
import { DataContext } from "../../contexts/DataContext";
function Units() {
  const { units, ApiData } = useContext(DataContext)
  ApiData()
  return (
    <div className="main-container">
      <div className="margin-container">⠀</div>
      <div className="title-container">
        
        Units
      </div>
      <table className="table-container">
        <thead>
          <tr>
            <th className="center">ID</th>
            <th className="left">Name</th>

          </tr>
        </thead>
        <tbody>
          {units?.map((unit) => (
            <tr key={unit.id}>
              <td className="center">{unit.id}</td>
              <td className="left">{unit.name}</td>
             
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

}

export default Units;
