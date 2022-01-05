import { useState, useEffect } from "react";
import api from "../../services/api/index";

function Units() {
  const [units, setUnits] = useState([]);

  useEffect(() => {
    api.get("db").then(({ data }) => {
      setUnits(data.units);
      console.log(data);
    });
    console.log(units);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <div className="margin-container">⠀</div>
      <div className="title-container">
        
        Units
      </div>
      <table className="table-container">
        <thead>
          <tr>
            <th className="center">ID</th>
            <th className="left">Name</th>
            <th className="center">Company ID</th>
          </tr>
        </thead>
        <tbody>
          {units?.map((unit) => (
            <tr key={unit.id}>
              <td className="center">{unit.id}</td>
              <td>{unit.name}</td>
              <td className="center">{unit.companyId}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

}

export default Units;
