import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";

const SearchByDistrict = () => {
  const [centers, setCenters] = useState([]);
  const [distId, setDistId] = useState(446);
  const [distIdBtnClick, setDistIdBtnClick] = useState(446);

  useEffect(() => {
    axios
      .get(
        `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByDistrict?district_id=${distId}&date=02-06-2021`
      )
      .then((res) => {
        setCenters(res.data.centers);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [distIdBtnClick]);

  const btnClickHandler = () => {
    setDistIdBtnClick(distId);
  };

  return (
    <>
      <input
        type="number"
        value={distId}
        onChange={(e) => setDistId(e.target.value)}
      />
      <button type="button" onClick={btnClickHandler}>
        OK
      </button>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Center Name</th>
            <th>Address</th>
            <th>From - To</th>
            <th>Vaccine</th>
            <th>Availabe Dose 1</th>
            <th>Availabe Dose 2</th>
          </tr>
        </thead>
        <tbody>
          {centers.map((center) => (
            <tr>
              <td>{center.name}</td>
              <td>{center.address}</td>
              <td>{center.from} - {center.to}</td>
              <td>{center.sessions[0].vaccine}</td>
              <td>{center.sessions[0].available_capacity_dose1}</td>
              <td>{center.sessions[0].available_capacity_dose2}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default SearchByDistrict;
