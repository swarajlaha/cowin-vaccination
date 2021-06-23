import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table, Badge } from "react-bootstrap";
import VaccineInfo from "./vaccineInfo";
import moment from "moment";
import "../styles/style.css";

const SearchByDistrict = (distId) => {
  const [centers, setCenters] = useState([]);

  let distIdParam = JSON.stringify(distId.distId);

  let dateArr = [];
  for (let i = 0; i < 7; i++) {
    let dt = moment().add(i, "days");
    dateArr.push(String(dt.format("DD-MM-YYYY")));
  }

  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_COWIN_BASE_URL}v2/appointment/sessions/public/calendarByDistrict?district_id=${distIdParam}&date=${dateArr[0]}`
      )
      .then((res) => {
        setCenters(res.data.centers);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [distIdParam]);

  return (
    <>
      <div
        className="mt-3 scrollbarstyle style-2"
        style={{ height: "auto", maxHeight: "685px", overflowX: "auto" }}
      >
        <Table striped bordered hover>
          <thead style={{boxShadow: "5px 5px 8px #888888"}}>
            <tr>
              <th
                style={{
                  whiteSpace: "nowrap",
                  position: "sticky",
                  top: "0",
                  backgroundColor: "white",
                }}
              >
                Center
              </th>
              {dateArr.map((dt) => (
                <th
                  style={{
                    whiteSpace: "nowrap",
                    position: "sticky",
                    top: "0",
                    backgroundColor: "white",
                  }}
                >
                  {dt}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {centers.map((center) =>
              center.sessions.some((sess) => sess.available_capacity) ? (
                <tr style={{boxShadow: "2px 3px 5px #888888"}}>
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
                          return <VaccineInfo dtArr={dtArr} />;
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
      </div>
    </>
  );
};

export default SearchByDistrict;
