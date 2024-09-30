import { getCubicBezierCurvePath } from '../../helpers/curve-path';
import { useMapContext, type Point } from 'react-simple-maps';

interface CurvedLineProps {
  from: Point;
  to: Point;
  color: string;
}

export const CurvedLine: React.FC<CurvedLineProps> = ({ from, to, color }) => {
  const { projection } = useMapContext();

  return <path d={getCubicBezierCurvePath(from, to, projection)} fill="none" stroke={color} strokeWidth={1.1} />;
};
