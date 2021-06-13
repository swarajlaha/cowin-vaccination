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

  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Header>WORLD</Card.Header>
        <ListGroup variant="flush">
          <ListGroup.Item>Confirmed Cases: {global.All.confirmed}</ListGroup.Item>
          <ListGroup.Item>Deaths: {global.All.deaths}</ListGroup.Item>
          <ListGroup.Item>Recovered: {global.All.recovered}</ListGroup.Item>
        </ListGroup>
      </Card>
    </>
  );
};

export default WorldStats;
