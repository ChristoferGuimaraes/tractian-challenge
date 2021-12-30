import "./styles.css";
import api from "../../services/api/index";
import { useState, useEffect } from "react";
import { HiDotsHorizontal } from "react-icons/hi";
import {
  BsFillXCircleFill,
  BsCheckCircleFill,
  BsExclamationCircleFill,
} from "react-icons/bs";
import { BiCalendar, BiStopwatch } from "react-icons/bi";
import Modal from "../Modal/index";
import Image from "../Image/index";
import moment from "moment";

function Assets() {
  const [assets, setAssets] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [tempAsset, setTempAsset] = useState("");

  useEffect(() => {
    api.get("db").then(({ data }) => {
      setAssets(data.assets);
      console.log(data);
    });
    console.log(assets);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function statusIcon(asset) {
    const styles = {
      red: { color: "red" },
      yellow: { color: "yellow" },
      green: { color: "green" },
    };

    if (asset.status === "inAlert") {
      return (
        <BsExclamationCircleFill
          className="alert-icons"
          style={styles.yellow}
        />
      );
    }
    if (asset.status === "inDowntime") {
      return <BsFillXCircleFill className="alert-icons" style={styles.red} />;
    }
    if (asset.status === "inOperation") {
      return <BsCheckCircleFill className="alert-icons" style={styles.green} />;
    }
  }

  function openMore(asset) {
    setTempAsset(asset);
    console.log(`clicou em ${asset.id}`);
    setOpenModal(true);
  }

  function modal() {
    return (
      <Modal
        handleClick={() => setOpenModal(false)}
        btnName={"Close"}
        title={
          <div className="title-modal-container">
            <span>{tempAsset.name}</span>{" "}
            <span>Status: {statusIcon(tempAsset)}</span>
          </div>
        }
        body={
          <div className="body-modal-container">
            <div className="img-modal-container">
              <Image
                imgLink={tempAsset.image}
                imgWidth={"245"}
                imgHeight={"245"}
              />
            </div>
            <div className="props-modal-container">
              <div>
                <label className="prop-modal">ID:</label>{" "}
                <label>{tempAsset.id}</label>
              </div>
              <div>
                <label className="prop-modal">Model:</label>{" "}
                <label>{tempAsset.model}</label>
              </div>
              <div>
                <label className="prop-modal">Sensors:</label>{" "}
                <label>{tempAsset.sensors}</label>
              </div>
              <div>
                <label className="prop-modal">Health Score:</label>{" "}
                {tempAsset.healthscore.toFixed(1)}%
              </div>
              <div>
                <label className="prop-modal">Max Temp:</label>{" "}
                {tempAsset.specifications.maxTemp} °C
              </div>
              {verifyRotation(tempAsset.specifications.rpm)}
              {verifyPower(tempAsset.specifications.power)}
              <div>
                <label className="prop-modal">Total Uptime:</label>{" "}
                {tempAsset.metrics.totalUptime.toFixed(1)} h
              </div>
              <div>
                <label className="prop-modal">Total Collects:</label>{" "}
                {tempAsset.metrics.totalCollectsUptime}
              </div>
              <div className="prop-uptime-container">
              <label className="prop-modal">Last Uptime:</label>
              <div className="prop-uptime">
                <div>
                  <label>
                    {" "}
                    <BiCalendar /> {formatDate(tempAsset.metrics.lastUptimeAt)}
                  </label>
                </div>
                <div>
                  <label>
                    {" "}
                    <BiStopwatch />{" "}
                    {formatHours(tempAsset.metrics.lastUptimeAt)}
                  </label>
                </div>
              </div>
            </div>
            </div>
          </div>
        }
      />
    );
  }

  function formatDate(date) {
    return moment(date).format("ll");
  }

  function formatHours(date) {
    return moment(date).format("LT");
  }

  function verifyRotation(prop) {
    if (prop !== undefined && prop !== null) {
      return (
        <div>
          <label className="prop-modal">Rotation:</label> {prop} RPM
        </div>
      );
    }
  }

  function verifyPower(prop) {
    if (prop !== undefined && prop !== 0) {
      return (
        <div>
          <label className="prop-modal">Power:</label> {prop} kWh
        </div>
      );
    }
  }

  return (
    <>
      {openModal === true && modal()}
      <div className="margin-container">⠀</div>
      <div className="title-container">Assets</div>

      <table className="table-container">
        <thead>
          <tr>
            <th className="center">ID</th>
            <th>Name</th>
            <th>Model</th>
            <th>Sensors</th>
            <th className="center">Status</th>
            <th className="center">More</th>
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
              <td className="center">
                <div>
                  <HiDotsHorizontal
                    className="more-icon"
                    onClick={() => openMore(asset)}
                  />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Assets;
