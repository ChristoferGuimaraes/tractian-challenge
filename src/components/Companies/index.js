import { useState, useEffect } from "react";
import api from "../../services/api/index";

function Companies() {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    api.get("db").then(({ data }) => {
      setCompanies(data.companies);
      console.log(data);
    });
    console.log(companies);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="margin-container">⠀</div>
      <div className="title-container">
        Companies
      </div>
      <table className="table-container">
        <thead>
          <tr>
            <th className="center">ID</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {companies?.map((companie) => (
            <tr key={companie.id}>
              <td className="center">{companie.id}</td>
              <td>{companie.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Companies;
