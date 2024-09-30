import React from 'react';
import { useGeographies, Geography, Marker } from 'react-simple-maps';
import getCentroid from '@helpers/get-centroid';
import { getStateName } from '@helpers/get-state-name';
import { getEngagementCountPerState } from '@helpers/get-engagement-count';
import { STYLES_MAP } from '@constants/map-config';
import { HeadquartersMarker } from './HeadquartersMarker';
import { CurvedLine } from './CurvedLine';

import type { MapProps } from './types';

const CustomGeographies: React.FC<MapProps> = ({ geography, pastorHQ, engagementData, onHover }) => {
  const { geographies } = useGeographies({ geography });

  const engagementCountPerState = getEngagementCountPerState(engagementData);

  const uniqueEngagementStates = new Set(engagementData.map((data) => getStateName(data.state)));
  const pastorHQState = getStateName(pastorHQ.headquarters);
  const markerCoordinates = getCentroid(pastorHQState, geographies);

  const getAnnotationCoordinates = () => {
    return Array.from(uniqueEngagementStates)
      .filter((state) => state !== pastorHQState && state !== 'Hawaii') // Hawaii line gets an error
      .map((state) => {
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
              onHover(`${stateName},${engagementCount}`);
            }}
            onMouseLeave={() => onHover('')}
          />
        );
      })}
      {markerCoordinates &&
        annotationCoordinates.map((annotation) => (
          <React.Fragment key={annotation.state}>
            <CurvedLine from={markerCoordinates} to={annotation.coordinates} color="#000" />
            <Marker key={`${annotation.state}-marker`} coordinates={annotation.coordinates}>
              <circle r={5} fill="blue" stroke="#FFF" strokeWidth={2} />
            </Marker>
          </React.Fragment>
        ))}
      {markerCoordinates && <HeadquartersMarker coordinates={markerCoordinates} />}
    </>
  );
};

export default CustomGeographies;
