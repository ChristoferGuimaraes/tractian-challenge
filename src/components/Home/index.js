import React, { useContext } from "react";
import Assets from "../Assets/index";
import Units from "../Units/index";
import Users from "../Users/index";
import Companies from "../Companies/index";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { DataContext } from "../../contexts/DataContext";
import "./styles.css";

function Home() {
  const { assets, ApiData } = useContext(DataContext);

  ApiData();

  const options = {
    chart: {
      type: "column",
    },
    title: {
      text: "Equipament Health Score.",
    },
    subtitle: {
      text: "January, 2022",
    },
    accessibility: {
      announceNewData: {
        enabled: true,
      },
    },
    xAxis: {
      type: "category",
    },
    yAxis: {
      title: {
        text: "Health Score",
      },
    },
    legend: {
      enabled: false,
    },
    plotOptions: {
      series: {
        borderWidth: 0,
        dataLabels: {
          enabled: true,
          format: "{point.y:.1f}%",
        },
      },
    },

    tooltip: {
      headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
      pointFormat:
        '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>',
    },

    series: [
      {
        name: "Equipament",
        colorByPoint: true,
        data: getAssets(),
      },
    ],
  };

  function getAssets() {
    let assetsHealthscoreArray = [];
    for (let i = 0; i < assets.length; i++) {
      assetsHealthscoreArray.push({
        name: assets[i]?.name,
        y: assets[i]?.healthscore,
      });
    }
    return assetsHealthscoreArray;
  }
  console.log(getAssets());

  return (
    <div className="all-data-container">
      <div className="data">
        <Assets />
      </div>

      <div className="data">
        <Users />
      </div>
      <div>
        <div className="data">
          <Units />
        </div>

        <div className="data">
          <Companies />
        </div>
      </div>
      <div className="data chart">
        <div className="chart">
          <HighchartsReact highcharts={Highcharts} options={options} />
        </div>
      </div>
    </div>
  );
}

export default Home;
