import React, { useState, useEffect } from "react";
import axios from "axios";

const SearchByDistrict = () => {
  const [centers, setCenters] = useState([]);
  const [distId, setDistId] = useState(446);
  const [districts, setDistricts] = useState([]);
  const [distIdBtnClick, setDistIdBtnClick] = useState(446);

  useEffect(() => {
    axios
      .get(
        `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByDistrict?district_id=${distId}&date=05-06-2021`
      )
      .then((res) => {
        setCenters(res.data.centers);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [distIdBtnClick]);

  useEffect(() => {
    axios
      .get(`https://cdn-api.co-vin.in/api/v2/admin/location/districts/26`)
      .then((res) => {
        setDistricts(res.data.districts);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const btnClickHandler = () => {
    setDistIdBtnClick(distId);
  };

  return (
    <div>
      <ul>
        {districts.map((district) => (
          <li key={district.district_id}>
            {district.district_name} - {district.district_id}
          </li>
        ))}
      </ul>
      <input
        type="number"
        value={distId}
        onChange={(e) => setDistId(e.target.value)}
      />
      <button type="button" onClick={btnClickHandler}>
        OK
      </button>
      <ul>
        {centers.map((center) => (
          <li key={center.center_id}>{center.name} | 
            Capacity: {center.sessions[0].available_capacity} |
            D1: {center.sessions[0].available_capacity_dose1} |
            D2: {center.sessions[0].available_capacity_dose2} |
            Age: {center.sessions[0].min_age_limit}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchByDistrict;
