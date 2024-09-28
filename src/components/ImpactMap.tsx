import React from 'react';
import { pastorHQ } from '../mockdata/pastor-data';

import './ImpactMap.css';

const ImpactMap: React.FC = () => {
  return (
    <div className="impact-map">
      <div className="impact-map__pastor-info">
        {/* <img src={pastorHQ.image} alt={pastorHQ.name} /> */}
        <div className="impact-map__pastor-info__details">
          <h2>{pastorHQ.name}</h2>
        </div>
      </div>
      {/* <Map /> */}
      <div className="impact-map__total-reach">
        <span className="impact-map__total-reach__label">Total Reach</span>
        <span className="impact-map__total-reach__count"> 3987</span>
      </div>
    </div>
  );
};

export default ImpactMap;
