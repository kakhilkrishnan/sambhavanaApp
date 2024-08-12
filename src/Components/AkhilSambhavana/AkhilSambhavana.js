import React, { useState } from "react";
import sambhavanalist from "../../akhil_sambhavana.json";
import { Table } from "react-bootstrap";

function AkhilSambhavana(props) {
  const { setcurrentView, currentView } = props;
  const [listSambhavana, setlistSambhavana] = useState(sambhavanalist);
  console.log("listSambhavana: ", listSambhavana);

  const handleSearchName = (value) => {
    let temp = sambhavanalist?.filter(
      (item) =>
        item?.Name?.toLowerCase()?.includes(value?.toLowerCase()) ||
        item?.Address?.toLowerCase()?.includes(value?.toLowerCase()) ||
        item?.Place?.toLowerCase()?.includes(value?.toLowerCase())
    );
    setlistSambhavana(temp);
  };

  const selectBack = () => {
    setcurrentView("login");
  };
  return (
    <div>
      <button onClick={selectBack} className="back-button">Back</button>
      <input
        onChange={(e) => {
          handleSearchName(e.target.value);
        }}
        placeholder="Search Name here"
      />
      <Table style={{ marginTop: "10px" }} striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Address</th>
            <th>Place</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {listSambhavana?.map((items, i) => (
            <tr>
              <td>{i + 1}</td>
              <td>{items?.Name}</td>
              <td>{items?.Address}</td>
              <td>{items?.Place}</td>
              <td>{items?.Amount}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default AkhilSambhavana;
