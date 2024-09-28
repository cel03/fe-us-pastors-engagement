import React from 'react';
import { useGeographies, Geography } from 'react-simple-maps';
import { STYLES_MAP } from '../../constants/map-config';

import type { MapProps } from './types';

const CustomGeographies: React.FC<MapProps> = ({ geography }) => {
  const { geographies } = useGeographies({ geography });

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
    </>
  );
};

export default CustomGeographies;
