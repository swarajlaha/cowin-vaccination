import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, ListGroup, Badge } from "react-bootstrap";

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
      <Card className="mt-5 slideinanimation zoomeffect" style={{boxShadow: "2px 3px 5px #888888"}}>
        <Card.Header>
          <b>WORLD</b>
        </Card.Header>
        <ListGroup variant="flush">
          <ListGroup.Item><Badge variant="secondary">Confirmed Cases</Badge><Badge variant="light"> {confCases}</Badge></ListGroup.Item>
          <ListGroup.Item><Badge variant="danger">Deaths</Badge><Badge variant="light"> {deaths}</Badge></ListGroup.Item>
          <ListGroup.Item><Badge variant="success">Recovered</Badge><Badge variant="light"> {recovered}</Badge></ListGroup.Item>
        </ListGroup>
      </Card>
    </>
  );
};

export default WorldStats;
