import React from "react";
import Assets from "../Assets/index";
import Units from "../Units/index";
import Users from "../Users/index";
import Companies from "../Companies/index";

import "./styles.css";

function Home() {
  
    return (
    <div className="all-data-container">
      <div className="data">
        <Assets />
      </div>

      <div className="data">
        <Users />
      </div>

      <div className="data">
        <Units />
      </div>

      <div className="data">
        <Companies />
      </div>
      <div id="chart">
        
      </div>
    </div>
  );
}

export default Home;
