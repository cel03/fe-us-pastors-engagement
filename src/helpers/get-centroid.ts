import { geoCentroid } from 'd3-geo';

const getCentroid = (stateName: string, geographies: any[]) => {
  const stateGeography = geographies?.find((geo) => geo.properties.name === stateName);
  if (stateGeography) {
    const centroid = geoCentroid(stateGeography);
    return centroid;
  }
  return undefined;
};

export default getCentroid;
