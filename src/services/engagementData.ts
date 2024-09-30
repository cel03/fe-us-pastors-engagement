import axios from 'axios';
import { EngagementData } from '../mockdata/engagement-data';

const fetchEngagementData = async (): Promise<EngagementData[]> => {
  const response = await axios.get('http://127.0.0.1:3000/api/v1/pastors/1/impact-map');
  return response.data;
};

export default fetchEngagementData;
