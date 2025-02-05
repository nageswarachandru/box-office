/* eslint-disable arrow-body-style */
import React from 'react'
import { DetailsWrapper } from './ShowMainData.Styled';

const Details = ({ status, premiered, network }) => {
  return (
    <DetailsWrapper>
      <p>
        Status: <span>{status}</span>
      </p>
      <p>
        Premiered {premiered} {network ? `on ${network.name}` : null}
      </p>
    </DetailsWrapper>
  );
};


export default Details
