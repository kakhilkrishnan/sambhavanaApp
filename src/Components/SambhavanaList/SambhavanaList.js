import React, { useState } from "react";
import sambhavanalist from "../../sambhavanalist.json";
import { Table } from "react-bootstrap";

function SambhavanaList(props) {
  const { setcurrentView, currentView } = props;
  const [listSambhavana, setlistSambhavana] = useState(sambhavanalist);

  const handleSearchName = (value) => {
    let temp = sambhavanalist?.filter(
      (item) =>
        item?.NAME?.toLowerCase()?.includes(value?.toLowerCase()) ||
        item?.Address?.toLowerCase()?.includes(value?.toLowerCase())
    );
    setlistSambhavana(temp);
  };

  const selectBack = () => {
    setcurrentView("login");
  };

  return (
    <div>
      <button onClick={selectBack} className="back-button">
        Back
      </button>
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
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {listSambhavana?.map((items, i) => (
            <tr>
              <td>{i}</td>
              <td>{items?.NAME}</td>
              <td>{items?.Address}</td>
              <td>{items?.Amount}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default SambhavanaList;
