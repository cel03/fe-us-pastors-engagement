import React from 'react';
import { useGeographies, Geography, Marker } from 'react-simple-maps';
import getCentroid from '@helpers/get-centroid';
import { getStateName } from '@helpers/get-state-name';
import { STYLES_MAP } from '@constants/map-config';

import type { MapProps } from './types';

const CustomGeographies: React.FC<MapProps> = ({ geography, pastorHQ }) => {
  const { geographies } = useGeographies({ geography });

  const pastorHQState = getStateName(pastorHQ.headquarters);
  const markerCoordinates = getCentroid(pastorHQState, geographies);

  return (
    <>
      {geographies.map((geo) => {
        return (
          <Geography
            key={geo.rsmKey}
            geography={geo}
            style={{ default: STYLES_MAP.default, pressed: STYLES_MAP.pressed, hover: STYLES_MAP.hover }}
          />
        );
      })}
      {markerCoordinates && (
        <Marker coordinates={markerCoordinates}>
          <circle r={5} fill="#F00" stroke="#FFF" strokeWidth={2} />
        </Marker>
      )}
    </>
  );
};

export default CustomGeographies;
