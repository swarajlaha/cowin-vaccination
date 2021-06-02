import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table, Badge } from "react-bootstrap";

const SearchByDistrict = () => {
  const [centers, setCenters] = useState([]);
  const [distId, setDistId] = useState(446);
  const [distIdBtnClick, setDistIdBtnClick] = useState(446);

  let today = new Date();
  let dd = String(today.getDate()).padStart(2, "0");
  let mm = String(today.getMonth() + 1).padStart(2, "0");
  var yyyy = today.getFullYear();
  today = dd + "-" + mm + "-" + yyyy;

  useEffect(() => {
    axios
      .get(
        `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByDistrict?district_id=${distId}&date=${today}`
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
      <br />
      <br />
      <input
        type="number"
        value={distId}
        onChange={(e) => setDistId(e.target.value)}
      />
      <button type="button" onClick={btnClickHandler}>
        OK
      </button>
      <h1>18+</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Center Name</th>
            <th>Address</th>
            <th>From - To</th>
            <th>Vaccine</th>
            <th>Dose 1</th>
            <th>Dose 2</th>
          </tr>
        </thead>
        <tbody>
          {centers.map((center) =>
            center.sessions[0].available_capacity &&
            center.sessions[0].min_age_limit === 18 ? (
              <tr>
                <td>
                  {center.name}{" "}
                  {center.fee_type === "Paid" ? (
                    <Badge variant="danger">{center.fee_type}</Badge>
                  ) : (
                    ""
                  )}
                </td>
                <td>{center.address}</td>
                <td>
                  {center.from} - {center.to}
                </td>
                <td>{center.sessions[0].vaccine}</td>
                <td>{center.sessions[0].available_capacity_dose1}</td>
                <td>{center.sessions[0].available_capacity_dose2}</td>
              </tr>
            ) : (
              ""
            )
          )}
        </tbody>
      </Table>
      <h1>45+</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Center Name</th>
            <th>Address</th>
            <th>From - To</th>
            <th>Vaccine</th>
            <th>Dose 1</th>
            <th>Dose 2</th>
          </tr>
        </thead>
        <tbody>
          {centers.map((center) =>
            center.sessions[0].available_capacity &&
            center.sessions[0].min_age_limit === 45 ? (
              <tr>
                <td>
                  {center.name}{" "}
                  {center.fee_type === "Paid" ? (
                    <Badge variant="danger">{center.fee_type}</Badge>
                  ) : (
                    ""
                  )}
                </td>
                <td>{center.address}</td>
                <td>
                  {center.from} - {center.to}
                </td>
                <td>{center.sessions[0].vaccine}</td>
                <td>{center.sessions[0].available_capacity_dose1}</td>
                <td>{center.sessions[0].available_capacity_dose2}</td>
              </tr>
            ) : (
              ""
            )
          )}
        </tbody>
      </Table>
    </>
  );
};

export default SearchByDistrict;
