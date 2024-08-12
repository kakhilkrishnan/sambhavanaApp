import React from "react";
import { Form, Button } from "react-bootstrap";
import "./Login.css";

function Login(props) {
  const { setcurrentView, currentView } = props;
  const selectAnju = () => {
    setcurrentView("sambhavanalist");
  };

  const selectAkhil = () => {
    setcurrentView("akhilSambhavana");
  };

  const iciciServicereqNumber = "873326311";
  return (
    <div>
      <div className="login-main-div">
        <label className="select-label">Select Sambhavana List</label>
        <button onClick={selectAkhil} className="selection-button">
          Akhil
        </button>
        <button onClick={selectAnju} className="selection-button">
          Anju
        </button>
      </div>
    </div>
  );
}

export default Login;
