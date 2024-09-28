import { EngagementData } from '../mockdata/engagement-data';
import { getStateName } from './get-state-name';

export function getEngagementCountPerState(data: EngagementData[]): Record<string, number> {
  return data.reduce((acc, item) => {
    const state = getStateName(item.state);
    const currentCount = acc[state] || 0;
    acc[state] = currentCount + 1;
    return acc;
  }, {} as Record<string, number>);
}

// Usage example:
// const stateOccurrences = getEngagementCountPerState(engagementData);
// console.log(stateOccurrences);
// Output: { Kansas: 2, New York: 2, Oregon: 1, New Jersey: 1, Alabama: 1 }
