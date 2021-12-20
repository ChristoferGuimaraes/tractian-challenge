import "./styles.css";
import api from "../../services/api/index";
import { useState, useEffect } from "react";
import { GoPrimitiveDot } from "react-icons/go";
import { FaTrashAlt, FaEdit } from "react-icons/fa";

function Main() {
  const [assets, setAssets] = useState([]);

  function statusIcon(asset) {
    const styles = {
      red: { color: "red" },
      yellow: { color: "yellow" },
      green: { color: "green" },
    };

    if (asset.status === "inAlert") {
      return <GoPrimitiveDot style={styles.red} />;
    }
    if (asset.status === "inDowntime") {
      return <GoPrimitiveDot style={styles.yellow} />;
    }
    if (asset.status === "inOperation") {
      return <GoPrimitiveDot style={styles.green} />;
    }
  }

  useEffect(() => {
    api.get("db").then(({ data }) => {
      setAssets(data.assets);
    });
    console.log(assets);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="App">
      <h1>Ativos</h1>
      <table border="1" className="table-container">
        <thead>
          <tr>
            <th className="center">ID</th>
            <th>Name</th>
            <th>Model</th>
            <th>Sensors</th>
            <th className="center">Status</th>
            <th className="center">Health Score</th>
            <th className="center">Actions</th>
          </tr>
        </thead>
        <tbody>
        {assets?.map((asset) => (
            <tr key={asset.id}>
              <td className="center">{asset.id}</td>
              <td>{asset.name}</td>
              <td>{asset.model}</td>
              <td>{asset.sensors}</td>
              <td className="center">{statusIcon(asset)}</td>
              <td className="center">{asset.healthscore}</td>
              <td className="center"><FaTrashAlt className="icons"/><FaEdit onClick={() => console.log(`clicou em ${asset.id}`)} className="icons"/></td>
            </tr>
        ))}
      </tbody>
      </table>
    </div>
  );
}

export default Main;
