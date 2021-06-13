import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table, Badge } from "react-bootstrap";
import VaccineInfo from "./vaccineInfo";
import moment from "moment";

const SearchByDistrict = (distId) => {
  const [centers, setCenters] = useState([]);

  let distIdParam = JSON.stringify(distId.distId);

  let dateArr = [];
  for(let i = 0; i < 7; i ++) {
    let dt = moment().add(i, 'days');
    dateArr.push((String(dt.format('DD-MM-YYYY'))));
  }

  useEffect(() => {
    axios
      .get(
        `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByDistrict?district_id=${distIdParam}&date=${dateArr[0]}`
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
