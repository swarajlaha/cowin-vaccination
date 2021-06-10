import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table, Badge } from "react-bootstrap";

const SearchByDistrict = (distId) => {
  const [centers, setCenters] = useState([]);

  let distIdParam = (JSON.stringify(distId.distId));
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

  return (
    <>
      <Table striped bordered hover className="mt-5">
        <thead>
          <tr>
            <th width="20%">Center</th>
            <th width="10%">
              {String(currDate.getDate())}-{String(currDate.getMonth() + 1)}-
              {currDate.getFullYear()}
            </th>
            <th width="10%">
              {String(currDate.getDate() + 1)}-{String(currDate.getMonth() + 1)}
              -{currDate.getFullYear()}
            </th>
            <th width="10%">
              {String(currDate.getDate() + 2)}-{String(currDate.getMonth() + 1)}
              -{currDate.getFullYear()}
            </th>
            <th width="10%">
              {String(currDate.getDate() + 3)}-{String(currDate.getMonth() + 1)}
              -{currDate.getFullYear()}
            </th>
            <th width="10%">
              {String(currDate.getDate() + 4)}-{String(currDate.getMonth() + 1)}
              -{currDate.getFullYear()}
            </th>
            <th width="10%">
              {String(currDate.getDate() + 5)}-{String(currDate.getMonth() + 1)}
              -{currDate.getFullYear()}
            </th>
            <th width="10%">
              {String(currDate.getDate() + 6)}-{String(currDate.getMonth() + 1)}
              -{currDate.getFullYear()}
            </th>
          </tr>
        </thead>
        <tbody>
          {centers.map((center) =>
            center.sessions[0]?.available_capacity ||
            center.sessions[1]?.available_capacity ||
            center.sessions[2]?.available_capacity ||
            center.sessions[3]?.available_capacity ||
            center.sessions[4]?.available_capacity ||
            center.sessions[5]?.available_capacity ||
            center.sessions[6]?.available_capacity ? (
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
                <td className="pb-0 pr-0">
                  {center.sessions[0]?.available_capacity ? (
                    center.sessions[0]?.vaccine === "COVISHIELD" ? (
                      <Badge variant="success">
                        {center.sessions[0]?.vaccine}
                      </Badge>
                    ) : (
                      <Badge variant="primary">
                        {center.sessions[0]?.vaccine}
                      </Badge>
                    )
                  ) : (
                    <Badge variant="secondary">NA</Badge>
                  )}
                  &nbsp;
                  {center.sessions[0]?.available_capacity ? (
                    center.sessions[0]?.min_age_limit === 45 ? (
                      <Badge pill variant="info">
                        {center.sessions[0]?.min_age_limit}+
                      </Badge>
                    ) : (
                      <Badge pill variant="danger">
                        {center.sessions[0]?.min_age_limit}+
                      </Badge>
                    )
                  ) : (
                    ""
                  )}
                  <br />
                  {center.sessions[0]?.available_capacity ? (
                    <>
                      D1: <b>{center.sessions[0]?.available_capacity_dose1}</b>{" "}
                      <br />
                      D2: <b>{center.sessions[0]?.available_capacity_dose2}</b>
                    </>
                  ) : (
                    ""
                  )}
                </td>
                <td className="pb-0 pr-0">
                  {center.sessions[1]?.available_capacity ? (
                    center.sessions[1]?.vaccine === "COVISHIELD" ? (
                      <Badge variant="success">
                        {center.sessions[1]?.vaccine}
                      </Badge>
                    ) : (
                      <Badge variant="primary">
                        {center.sessions[1]?.vaccine}
                      </Badge>
                    )
                  ) : (
                    <Badge variant="secondary">NA</Badge>
                  )}
                  &nbsp;
                  {center.sessions[1]?.available_capacity ? (
                    center.sessions[1]?.min_age_limit === 45 ? (
                      <Badge pill variant="info">
                        {center.sessions[1]?.min_age_limit}+
                      </Badge>
                    ) : (
                      <Badge pill variant="danger">
                        {center.sessions[1]?.min_age_limit}+
                      </Badge>
                    )
                  ) : (
                    ""
                  )}
                  <br />
                  {center.sessions[1]?.available_capacity ? (
                    <>
                      D1: <b>{center.sessions[1]?.available_capacity_dose1}</b>{" "}
                      <br />
                      D2: <b>{center.sessions[1]?.available_capacity_dose2}</b>
                    </>
                  ) : (
                    ""
                  )}
                </td>
                <td className="pb-0 pr-0">
                  {center.sessions[2]?.available_capacity ? (
                    center.sessions[2]?.vaccine === "COVISHIELD" ? (
                      <Badge variant="success">
                        {center.sessions[2]?.vaccine}
                      </Badge>
                    ) : (
                      <Badge variant="primary">
                        {center.sessions[2]?.vaccine}
                      </Badge>
                    )
                  ) : (
                    <Badge variant="secondary">NA</Badge>
                  )}
                  &nbsp;
                  {center.sessions[2]?.available_capacity ? (
                    center.sessions[2]?.min_age_limit === 45 ? (
                      <Badge pill variant="info">
                        {center.sessions[2]?.min_age_limit}+
                      </Badge>
                    ) : (
                      <Badge pill variant="danger">
                        {center.sessions[2]?.min_age_limit}+
                      </Badge>
                    )
                  ) : (
                    ""
                  )}
                  <br />
                  {center.sessions[2]?.available_capacity ? (
                    <>
                      D1: <b>{center.sessions[2]?.available_capacity_dose1}</b>{" "}
                      <br />
                      D2: <b>{center.sessions[2]?.available_capacity_dose2}</b>
                    </>
                  ) : (
                    ""
                  )}
                </td>
                <td className="pb-0 pr-0">
                  {center.sessions[3]?.available_capacity ? (
                    center.sessions[3]?.vaccine === "COVISHIELD" ? (
                      <Badge variant="success">
                        {center.sessions[3]?.vaccine}
                      </Badge>
                    ) : (
                      <Badge variant="primary">
                        {center.sessions[3]?.vaccine}
                      </Badge>
                    )
                  ) : (
                    <Badge variant="secondary">NA</Badge>
                  )}
                  &nbsp;
                  {center.sessions[3]?.available_capacity ? (
                    center.sessions[3]?.min_age_limit === 45 ? (
                      <Badge pill variant="info">
                        {center.sessions[3]?.min_age_limit}+
                      </Badge>
                    ) : (
                      <Badge pill variant="danger">
                        {center.sessions[3]?.min_age_limit}+
                      </Badge>
                    )
                  ) : (
                    ""
                  )}
                  <br />
                  {center.sessions[3]?.available_capacity ? (
                    <>
                      D1: <b>{center.sessions[3]?.available_capacity_dose1}</b>{" "}
                      <br />
                      D2: <b>{center.sessions[3]?.available_capacity_dose2}</b>
                    </>
                  ) : (
                    ""
                  )}
                </td>
                <td className="pb-0 pr-0">
                  {center.sessions[4]?.available_capacity ? (
                    center.sessions[4]?.vaccine === "COVISHIELD" ? (
                      <Badge variant="success">
                        {center.sessions[4]?.vaccine}
                      </Badge>
                    ) : (
                      <Badge variant="primary">
                        {center.sessions[4]?.vaccine}
                      </Badge>
                    )
                  ) : (
                    <Badge variant="secondary">NA</Badge>
                  )}
                  &nbsp;
                  {center.sessions[4]?.available_capacity ? (
                    center.sessions[4]?.min_age_limit === 45 ? (
                      <Badge pill variant="info">
                        {center.sessions[4]?.min_age_limit}+
                      </Badge>
                    ) : (
                      <Badge pill variant="danger">
                        {center.sessions[4]?.min_age_limit}+
                      </Badge>
                    )
                  ) : (
                    ""
                  )}
                  <br />
                  {center.sessions[4]?.available_capacity ? (
                    <>
                      D1: <b>{center.sessions[4]?.available_capacity_dose1}</b>{" "}
                      <br />
                      D2: <b>{center.sessions[4]?.available_capacity_dose2}</b>
                    </>
                  ) : (
                    ""
                  )}
                </td>
                <td className="pb-0 pr-0">
                  {center.sessions[5]?.available_capacity ? (
                    center.sessions[5]?.vaccine === "COVISHIELD" ? (
                      <Badge variant="success">
                        {center.sessions[5]?.vaccine}
                      </Badge>
                    ) : (
                      <Badge variant="primary">
                        {center.sessions[5]?.vaccine}
                      </Badge>
                    )
                  ) : (
                    <Badge variant="secondary">NA</Badge>
                  )}
                  &nbsp;
                  {center.sessions[5]?.available_capacity ? (
                    center.sessions[5]?.min_age_limit === 45 ? (
                      <Badge pill variant="info">
                        {center.sessions[5]?.min_age_limit}+
                      </Badge>
                    ) : (
                      <Badge pill variant="danger">
                        {center.sessions[5]?.min_age_limit}+
                      </Badge>
                    )
                  ) : (
                    ""
                  )}
                  <br />
                  {center.sessions[5]?.available_capacity ? (
                    <>
                      D1: <b>{center.sessions[5]?.available_capacity_dose1}</b>{" "}
                      <br />
                      D2: <b>{center.sessions[5]?.available_capacity_dose2}</b>
                    </>
                  ) : (
                    ""
                  )}
                </td>
                <td className="pb-0 pr-0">
                  {center.sessions[6]?.available_capacity ? (
                    center.sessions[6]?.vaccine === "COVISHIELD" ? (
                      <Badge variant="success">
                        {center.sessions[6]?.vaccine}
                      </Badge>
                    ) : (
                      <Badge variant="primary">
                        {center.sessions[6]?.vaccine}
                      </Badge>
                    )
                  ) : (
                    <Badge variant="secondary">NA</Badge>
                  )}
                  &nbsp;
                  {center.sessions[6]?.available_capacity ? (
                    center.sessions[6]?.min_age_limit === 45 ? (
                      <Badge pill variant="info">
                        {center.sessions[6]?.min_age_limit}+
                      </Badge>
                    ) : (
                      <Badge pill variant="danger">
                        {center.sessions[6]?.min_age_limit}+
                      </Badge>
                    )
                  ) : (
                    ""
                  )}
                  <br />
                  {center.sessions[6]?.available_capacity ? (
                    <>
                      D1: <b>{center.sessions[6]?.available_capacity_dose1}</b>{" "}
                      <br />
                      D2: <b>{center.sessions[6]?.available_capacity_dose2}</b>
                    </>
                  ) : (
                    ""
                  )}
                </td>
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
