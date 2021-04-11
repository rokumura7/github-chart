import { ResultByStylist } from "../types";
import Expert from "./Expert";

interface Props {
  theme: string
}

export default class Stylist implements Expert<ResultByStylist> {
  work(props?: Props): ResultByStylist {
    const style = `
<style>
  .this_year {
    stroke: #ACA
  }
  .last_year {
    stroke: #CAA;
  }
  .card {
    fill: #141321;
    stroke: #E4E2E2;
    stroke-opacity: 1;
  }
  .xy-axis {
    stroke: #CCC;
  }
  .avg-line {
    opacity: 0.5;
  }
  .ruled-line {
    stroke: #777;
    opacity: 0.1;
  }
  .months {
    fill: #CCC;
  }
  .circle-points {
    fill: #CFC;
  }
  line {
    stroke-width: 2;
  }
  polyline {
    fill: none;
    stroke-width: 2;
  }
  polyline.this_year {
    stroke-width: 4;
  }
</style>
`
    return { style }
  }
}