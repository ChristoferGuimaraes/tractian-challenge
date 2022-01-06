import "./styles.css";
import { useState, useContext } from "react";
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
import { AssetsContext } from "../../contexts/AssetsContext.js";

function Assets() {
  const { assets, ApiData } = useContext(AssetsContext);
  const [openModal, setOpenModal] = useState(false);
  const [tempAsset, setTempAsset] = useState("");

  ApiData();

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
    setOpenModal(true);
  }

  function modal() {
    return (
      <Modal
        handleClick={() => setOpenModal(false)}
        btnName={"Close"}
        title={
          <div className="title-modal-container">
            <span className="title-modal-elements">{tempAsset.name}</span>
            <span className="title-modal-elements">
              Status:
              <span className="title-modal-icon-status">
                {statusIcon(tempAsset)}
              </span>
            </span>
          </div>
        }
        body={
          <div className="body-modal-container">
            <div className="img-modal-container">
              <Image
                imgStyle={"image"}
                imgLink={tempAsset.image}
                imgWidth={"300"}
                imgHeight={"300"}
              />
            </div>
            <table className="body-modal-container">
              <tbody className="table-props-container">
                <tr>
                  <th className="prop-modal">ID:</th>
                  <td className="center">{tempAsset.id}</td>
                </tr>
                <tr>
                  <th className="prop-modal">Model:</th>
                  <td className="center">{tempAsset.model}</td>
                </tr>
                <tr>
                  <th className="prop-modal">Sensors:</th>
                  <td className="center">{tempAsset.sensors}</td>
                </tr>
                <tr>
                  <th className="prop-modal">Health Score:</th>
                  <td className="center">
                    {tempAsset.healthscore.toFixed(1)}%
                  </td>
                </tr>
                <tr>
                  <th className="prop-modal">Max Temp:</th>
                  <td className="center">
                    {tempAsset.specifications.maxTemp} °C
                  </td>
                </tr>

                {verifyRotation(tempAsset.specifications.rpm)}
                {verifyPower(tempAsset.specifications.power)}
                <tr>
                  <th className="prop-modal">Total Uptime:</th>
                  <td className="center">
                    {tempAsset.metrics.totalUptime.toFixed(1)} h
                  </td>
                </tr>
                <tr>
                  <th className="prop-modal">Total Collects:</th>
                  <td className="center">
                    {tempAsset.metrics.totalCollectsUptime}
                  </td>
                </tr>
                <tr>
                  <th className="prop-modal">Last Uptime:</th>
                  <td className="prop-uptime">
                    <div>
                      <BiCalendar />
                      {formatDate(tempAsset.metrics.lastUptimeAt)}
                    </div>
                    <div>
                      <BiStopwatch />
                      {formatHours(tempAsset.metrics.lastUptimeAt)}
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
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
        <tr>
          <th className="prop-modal">Rotation:</th>
          <td className="center">{prop} RPM</td>
        </tr>
      );
    }
  }

  function verifyPower(prop) {
    if (prop !== undefined && prop !== 0) {
      return (
        <tr>
          <th className="prop-modal">Power:</th>
          <td className="center">{prop} kWh</td>
        </tr>
      );
    }
  }

  return (
    <div className="main-container">
      {openModal === true && modal()}
      <div className="margin-container">⠀</div>
      <div className="title-container">Assets</div>

      <table className="table-container">
        <thead>
          <tr>
            <th className="center">ID</th>
            <th className="left">Name</th>
            <th className="left">Model</th>
            <th className="left">Sensors</th>
            <th className="center">Status</th>
            <th className="center">More</th>
          </tr>
        </thead>
        <tbody>
          {assets?.map((asset) => (
            <tr key={asset.id}>
              <td className="center">{asset.id}</td>
              <td className="left">{asset.name}</td>
              <td className="left">{asset.model}</td>
              <td className="left">{asset.sensors}</td>
              <td className="center">{statusIcon(asset)}</td>
              <td className="center">
                <div>
                  <HiDotsHorizontal
                    className="more-icon center"
                    onClick={() => openMore(asset)}
                  />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Assets;
