import React, { useState } from "react";
import "./App.css";
import { Table } from "react-bootstrap";
import axios from "axios";
import Login from "./Components/Login/Login";
import SambhavanaList from "./Components/SambhavanaList/SambhavanaList";
import AccountDetails from "./Components/AccountDetails/AccountDetails";
import AkhilSambhavana from "./Components/AkhilSambhavana/AkhilSambhavana";
import MainHeader from "./Components/MainHeader/MainHeader";

function App() {
  const [currentView, setcurrentView] = useState("login");

  return (
    <div className="App">
      {currentView === "login" && (
        <Login currentView={currentView} setcurrentView={setcurrentView} />
      )}
      {currentView === "sambhavanalist" && (
        <SambhavanaList
          currentView={currentView}
          setcurrentView={setcurrentView}
        />
      )}
      {currentView === "accountdetails" && (
        <AccountDetails
          currentView={currentView}
          setcurrentView={setcurrentView}
        />
      )}
      {currentView === "akhilSambhavana" && (
        <AkhilSambhavana
          currentView={currentView}
          setcurrentView={setcurrentView}
        />
      )}
    </div>
  );
}

export default App;
