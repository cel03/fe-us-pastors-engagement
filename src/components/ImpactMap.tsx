import React, { useState, useEffect } from 'react';
import usaMap from '@assets/geo-json/usa-map.json';
import { pastorHQ } from '@mockdata/pastor-data';
import { engagementData as engagementMockData } from '@mockdata/engagement-data';
import Map from './Map';

import type { EngagementData } from './types';

import './ImpactMap.css';

const ImpactMap: React.FC = () => {
  const [engagementData, setEngagementData] = useState<EngagementData[]>([]);

  useEffect(() => {
    setEngagementData(engagementMockData);
  }, []);

  return (
    <div className="impact-map">
      <div className="impact-map__pastor-info">
        {/* <img src={pastorHQ.image} alt={pastorHQ.name} /> */}
        <div className="impact-map__pastor-info__details">
          <h2>{pastorHQ.name}</h2>
        </div>
      </div>
      <Map geography={usaMap} />
      <div className="impact-map__total-reach">
        <span className="impact-map__total-reach__label">Total Reach</span>
        <span className="impact-map__total-reach__count">{engagementData.length}</span>
      </div>
    </div>
  );
};

export default ImpactMap;
