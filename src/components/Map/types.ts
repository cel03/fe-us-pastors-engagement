import type { GeographiesProps } from 'react-simple-maps';
import type { PastorData } from '@mockdata/pastor-data';

export interface MapProps {
  geography: GeographiesProps['geography'];
  pastorHQ: PastorData;
}
