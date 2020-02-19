import React from "react";

import {ArrowRightIcon} from "../../assets/icons";
import {StyledDashboardTile} from './styles';

const DashboardTile = ({ title, count, conf, onClick }) => (
  <StyledDashboardTile onClick={onClick}>
    <div>
      <h2>{title}</h2>
      <p>{count} created so far</p>
      <p>{conf}</p>
    </div>
    <div>
      <p>
        <span>Go To {title}</span> <ArrowRightIcon />
      </p>
    </div>
  </StyledDashboardTile>
);

export default DashboardTile;