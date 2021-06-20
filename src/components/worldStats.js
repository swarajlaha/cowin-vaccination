import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, ListGroup } from "react-bootstrap";

const WorldStats = () => {
  const [global, setGlobal] = useState([]);

  useEffect(() => {
    axios
      .get(`https://covid-api.mmediagroup.fr/v1/cases`)
      .then((res) => {
        let globalData = res.data.Global;
        setGlobal(globalData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [setGlobal]);

  function numberWithCommas(x) {
    return x?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  const confCases = numberWithCommas(global.All?.confirmed);
  const deaths = numberWithCommas(global.All?.deaths);
  const recovered = numberWithCommas(global.All?.recovered);

  return (
    <>
      <Card className="mt-5">
        <Card.Header>
          <b>WORLD</b>
        </Card.Header>
        <ListGroup variant="flush">
          <ListGroup.Item>Confirmed Cases: {confCases}</ListGroup.Item>
          <ListGroup.Item>Deaths: {deaths}</ListGroup.Item>
          <ListGroup.Item>Recovered: {recovered}</ListGroup.Item>
        </ListGroup>
      </Card>
    </>
  );
};

export default WorldStats;
