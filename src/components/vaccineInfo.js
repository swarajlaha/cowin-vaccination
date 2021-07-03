import React, { useState, useEffect } from 'react'
import { Badge } from 'react-bootstrap'

const VaccineInfo = (props) => {
  return (
    <>
      {props.dtArr?.available_capacity ? (
        props.dtArr?.vaccine === 'COVISHIELD' ? (
          <Badge variant="success">{props.dtArr?.vaccine}</Badge>
        ) : props.dtArr?.vaccine === 'COVAXIN' ? (
          <Badge variant="primary">{props.dtArr?.vaccine}</Badge>
        ) : (
          <Badge variant="warning">{props.dtArr?.vaccine}</Badge>
        )
      ) : (
        ''
      )}
      &nbsp;
      {props.dtArr?.available_capacity ? (
        props.dtArr?.min_age_limit === 45 ? (
          <Badge pill variant="info">
            {props.dtArr?.min_age_limit}+
          </Badge>
        ) : (
          <Badge pill variant="danger">
            {props.dtArr?.min_age_limit}+
          </Badge>
        )
      ) : (
        ''
      )}
      <br />
      {props.dtArr?.available_capacity ? (
        <>
          D1: <b>{props.dtArr?.available_capacity_dose1}</b> <br />
          D2: <b>{props.dtArr?.available_capacity_dose2}</b>
        </>
      ) : (
        ''
      )}
      <br />
    </>
  )
}

export default VaccineInfo
