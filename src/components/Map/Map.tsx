import React from 'react';
import { ComposableMap } from 'react-simple-maps';
import CustomGeographies from './CustomGeographies';

import type { MapProps } from './types';

const Map: React.FC<MapProps> = ({ geography, pastorHQ }) => {
  return (
    <div id="map">
      <ComposableMap projection="geoAlbersUsa">
        <CustomGeographies geography={geography} pastorHQ={pastorHQ} />
      </ComposableMap>
    </div>
  );
};

export default Map;
