import { ResultByStylist } from '../../types';
import Expert from './expert';

export default class Stylist implements Expert<ResultByStylist> {
  work(): ResultByStylist {
    const style = `
<style>
  ${this.makeFundamental()}
  .this_year { stroke: #ACA; }
  .last_year { stroke: #CAA; }
  .card { fill: #141321; stroke: #E4E2E2; stroke-opacity: 1; }
  .xy-axis { stroke: #CCC; }
  .avg-line { opacity: 0.5; }
  .ruled-line { stroke: #777; opacity: 0.1; }
  .months { fill: #CCC; }
  .circle-points { fill: #CFC; }
</style>`;
    return { style };
  }

  private makeFundamental = () => `
  line, polyline {
    fill: none;
    stroke-width: 2;
    stroke-dasharray: 1000;
    stroke-dashoffset: 1000;
    -webkit-animation: dash 4s linear forwards;
    animation: dash 4s linear forwards;
  }
  @-webkit-keyframes dash {
    to {
      stroke-dashoffset: 0;
    }
  }
  @keyframes dash {
    to {
      stroke-dashoffset: 0;
    }
  }
  polyline.this_year { stroke-width: 4; }
  `;
}
