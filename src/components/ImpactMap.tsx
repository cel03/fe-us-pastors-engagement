import React from 'react';
import usaMap from '@assets/geo-json/usa-map.json';
import Map from './Map';

import './ImpactMap.css';

const ImpactMap: React.FC = () => {
  return (
    <div className="impact-map">
      <div className="impact-map__pastor-info">
        {/* <img src={pastorHQ.image} alt={pastorHQ.name} /> */}
        <div className="impact-map__pastor-info__details">
          <h2>Jeff Osborne</h2>
        </div>
      </div>
      <Map geography={usaMap} />
      <div className="impact-map__total-reach">
        <span className="impact-map__total-reach__label">Total Reach</span>
        <span className="impact-map__total-reach__count"> 3987</span>
      </div>
    </div>
  );
};

export default ImpactMap;
