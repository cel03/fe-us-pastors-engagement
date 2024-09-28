import React from 'react';
import { useGeographies, Geography, Marker, Line } from 'react-simple-maps';
import getCentroid from '@helpers/get-centroid';
import { getStateName } from '@helpers/get-state-name';
import { getEngagementCountPerState } from '@helpers/get-engagement-count';
import { STYLES_MAP } from '@constants/map-config';

import type { MapProps } from './types';

const CustomGeographies: React.FC<MapProps> = ({ geography, pastorHQ, engagementData, onHover }) => {
  const { geographies } = useGeographies({ geography });

  const engagementCountPerState = getEngagementCountPerState(engagementData);

  const uniqueEngagementStates = new Set(engagementData.map((data) => getStateName(data.state)));
  const pastorHQState = getStateName(pastorHQ.headquarters);
  const markerCoordinates = getCentroid(pastorHQState, geographies);

  const getAnnotationCoordinates = () => {
    return Array.from(uniqueEngagementStates).map((state) => {
      return { coordinates: getCentroid(state, geographies), state };
    });
  };
  const annotationCoordinates = getAnnotationCoordinates();

  return (
    <>
      {geographies.map((geo) => {
        const stateName = geo.properties.name;
        const engagementCount = engagementCountPerState[stateName] || 0;
        return (
          <Geography
            key={geo.rsmKey}
            geography={geo}
            style={{ default: STYLES_MAP.default, pressed: STYLES_MAP.pressed, hover: STYLES_MAP.hover }}
            onMouseEnter={() => {
              onHover(`${stateName}, Reach: ${engagementCount}`);
            }}
            onMouseLeave={() => onHover('')}
          />
        );
      })}
      {markerCoordinates && (
        <Marker coordinates={markerCoordinates}>
          <circle r={5} fill="#F00" stroke="#FFF" strokeWidth={2} />
        </Marker>
      )}
      {markerCoordinates &&
        annotationCoordinates.map((annotation) => (
          <React.Fragment key={annotation.state}>
            <Line
              key={`${annotation.state}-line`}
              from={markerCoordinates}
              to={annotation.coordinates}
              stroke="#000"
              strokeWidth={1}
            />
            <Marker key={`${annotation.state}-marker`} coordinates={annotation.coordinates}>
              <circle r={5} fill="blue" stroke="#FFF" strokeWidth={2} />
            </Marker>
          </React.Fragment>
        ))}
    </>
  );
};

export default CustomGeographies;
