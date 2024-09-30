import { Marker } from 'react-simple-maps';
import { blue } from '@mui/material/colors';

export const HeadquartersMarker: React.FC<{ coordinates: [number, number] }> = ({ coordinates }) => {
  return (
    <Marker coordinates={coordinates}>
      <rect x="-20" y="-20" rx="20" ry="20" width="40" height="40" fill="none" stroke={blue[900]} stroke-width="8" />
      <image
        href="https://avatar.iran.liara.run/public/boy"
        x="-20"
        y="-20"
        width="40"
        height="40"
        preserveAspectRatio="xMidYMid meet"
      />
    </Marker>
  );
};
