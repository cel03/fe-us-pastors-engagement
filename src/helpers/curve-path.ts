import type { GeoProjection } from 'd3-geo';
import type { Point } from 'react-simple-maps';

export const getCubicBezierCurvePath = (from: Point, to: Point, projection: GeoProjection) => {
  const startPoint = projection(from);
  const endPoint = projection(to);
  const controlPointX = (startPoint[0] + endPoint[0]) / 2;
  const controlPointY = (startPoint[1] + endPoint[1]) / 2 - 250;

  return `M${startPoint[0]},${startPoint[1]} 
              Q${controlPointX},${controlPointY} ${endPoint[0]},${endPoint[1]}`;
};
