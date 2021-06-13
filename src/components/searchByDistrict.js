import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table, Badge } from "react-bootstrap";
import VaccineInfo from "./vaccineInfo";

const SearchByDistrict = (distId) => {
  const [centers, setCenters] = useState([]);

  let distIdParam = JSON.stringify(distId.distId);
  let today = new Date();
  let dd = String(today.getDate()).padStart(2, "0");
  let mm = String(today.getMonth() + 1).padStart(2, "0");
  var yyyy = today.getFullYear();
  today = dd + "-" + mm + "-" + yyyy;

  useEffect(() => {
    axios
      .get(
        `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByDistrict?district_id=${distIdParam}&date=${today}`
      )
      .then((res) => {
        setCenters(res.data.centers);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [distIdParam]);

  let currDate = new Date();

  let dateArr = [
    "13-06-2021",
    "14-06-2021",
    "15-06-2021",
    "16-06-2021",
    "17-06-2021",
    "18-06-2021",
    "19-06-2021",
  ];

  return (
    <>
      <Table striped bordered hover className="mt-5">
        <thead>
          <tr>
            <th width="20%">Center</th>
            {dateArr.map((dt) => (
              <th width="10%">{dt}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {centers.map((center) =>
            /** Use below array.any */
            center.sessions.some(sess => sess.available_capacity) ? (
              <tr>
                <td className="pb-0 pr-0">
                  <b>{center.name}&nbsp;</b>
                  {center.fee_type === "Paid" ? (
                    <Badge variant="danger">{center.fee_type}</Badge>
                  ) : (
                    ""
                  )}
                  <br />
                  <p className="mb-0">{center.address}</p>
                </td>
                {dateArr.map((dt) => {
                  const dtArrs = center.sessions.filter(
                    (session) => session.date === dt
                  );
                  return (
                    <td className="pb-0 pr-0">
                      {dtArrs.map((dtArr) => {
                        return <VaccineInfo dtArr={dtArr} />
                      })}
                    </td>
                  );
                })}
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
