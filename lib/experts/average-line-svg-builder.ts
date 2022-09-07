import Expert from './expert';
import { ResultBySVGBuilder } from '../../types';

interface Props {
  thisYearAvg: number;
  lastYearAvg: number;
  diameter: number;
}

export default class AverageLineSVGBuilder implements Expert<ResultBySVGBuilder> {
  work(props: Props): ResultBySVGBuilder {
    const svg = `
${this.makeDescription(props)}
${this.makeLines(props)}`;
    return { svg };
  }

  private makeDescription = (props: Props) => {
    const thisYear = new Date().getFullYear();
    const lastYear = thisYear - 1;
    return `
<g class="avg-description">
  <line class="this_year" x1="50" y1="15" x2="75" y2="15" />
  <line class="last_year" x1="50" y1="35" x2="75" y2="35" />
  <text class="this_year" x="80" y="20">${thisYear}：Avg. ${props.thisYearAvg}</text>
  <text class="last_year" x="80" y="40">${lastYear}：Avg. ${props.lastYearAvg}</text>
</g>`;
  };

  private makeLines = (props: Props) => `
<g class="avg-lines">
  ${this.makeLine(props.thisYearAvg, props.diameter, true)}
  ${this.makeLine(props.lastYearAvg, props.diameter, false)}
</g>`;

  private makeLine = (avg: number, diameter: number, isThisYear: boolean) =>
    '<line class="_CLASS avg-line" x1="50" y1="_AVG" x2="600" y2="_AVG" />'
      .replace(/_CLASS/g, isThisYear ? 'this_year' : 'last_year')
      .replace(/_AVG/g, `${300 - avg * diameter}`);
}
