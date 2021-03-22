import { ActivitiesDataPerMonth } from "./types";

const render = (activities: ActivitiesDataPerMonth[]) => {
  return `
  <svg width="650" height="350" viewBox="0,0,650,350">
    <line x1="50" y1="50" x2="50" y2="300" stroke="#ccc" />
    <line x1="50" y1="300" x2="600" y2="300" stroke="#ccc" />
  </svg>
  `
}