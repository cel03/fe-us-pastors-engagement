import { US_STATES } from '@constants/states-map';

export const getStateName = (stateAbbreviation: string) => {
  return US_STATES[stateAbbreviation].label;
};
