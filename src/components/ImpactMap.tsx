import React from 'react';
import { Tooltip } from 'react-tooltip';
import { useQuery } from '@tanstack/react-query';
import { Avatar } from '@mui/material';
import { blue } from '@mui/material/colors';
import usaMap from '@assets/geo-json/usa-map.json';
import { pastorHQ } from '@mockdata/pastor-data';
import fetchEngagementData from '../services/engagementData';
import Map from './Map';

import type { EngagementData } from './types';

import './ImpactMap.css';

const ImpactMap: React.FC = () => {
  const [tooltipContent, setTooltipContent] = React.useState('');

  const {
    data: engagementData,
    isLoading,
    error,
  } = useQuery<EngagementData[]>({
    queryKey: ['engagementData'],
    queryFn: fetchEngagementData,
    refetchInterval: 60000,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>An error occurred.</div>;
  if (!engagementData) return <div>No data available</div>;

  return (
    <div className="impact-map">
      <div className="impact-map__pastor-info">
        <Avatar src="https://avatar.iran.liara.run/public/boy" sx={{ border: `4px solid ${blue[900]}` }} />
        <div className="impact-map__pastor-info__details">
          <h2>{pastorHQ.name}</h2>
        </div>
      </div>
      <Map geography={usaMap} pastorHQ={pastorHQ} engagementData={engagementData} onHover={setTooltipContent} />
      <div className="impact-map__total-reach">
        <span className="impact-map__total-reach__label">Total Reach</span>
        <span className="impact-map__total-reach__count">{engagementData.length}</span>
      </div>
      <Tooltip
        anchorSelect="#map"
        content={tooltipContent}
        float
        render={({ content }) => {
          if (!content) return undefined;
          const [state, count] = content?.split(',');
          return (
            <div className="impact-map__tooltip">
              <span>{state}</span>
              <br />
              <span>{count}</span>
            </div>
          );
        }}
      />
    </div>
  );
};

export default ImpactMap;
