import type { GeographiesProps } from 'react-simple-maps';
import type { PastorData } from '@mockdata/pastor-data';
import type { EngagementData } from '@mockdata/engagement-data';

export interface MapProps {
  geography: GeographiesProps['geography'];
  pastorHQ: PastorData;
  engagementData: EngagementData[];
  onHover: (content: string) => void;
}
