import Expert from "./Expert";
import { ResultBySVGBuilder } from "../types";

export default class OutlineSVGBuilder implements Expert<ResultBySVGBuilder> {
  work(): ResultBySVGBuilder {
    const svg = `
<svg width="650" height="350" viewBow="0,0,650,350" xmlns="http://www.w3.org/2000/svg">
  __STYLES__
  <rect class="card" data-testid="card-bg" x="0.5" y="0.5" rx="4.5" height="99%" width="99%" />
  <g class="xy-axis">
    <line x1="50" y1="50" x2="50" y2="300" />
    <line x1="50" y1="300" x2="600" y2="300" />
  </g>
  <g class="ruled-line">
    <line x1="100" x2="100" y1="50" y2="300"/>
    <line x1="150" x2="150" y1="50" y2="300"/>
    <line x1="200" x2="200" y1="50" y2="300"/>
    <line x1="250" x2="250" y1="50" y2="300"/>
    <line x1="300" x2="300" y1="50" y2="300"/>
    <line x1="350" x2="350" y1="50" y2="300"/>
    <line x1="400" x2="400" y1="50" y2="300"/>
    <line x1="450" x2="450" y1="50" y2="300"/>
    <line x1="500" x2="500" y1="50" y2="300"/>
    <line x1="550" x2="550" y1="50" y2="300"/>
    <line x1="600" x2="600" y1="50" y2="300"/>
    <line x1="50" x2="600" y1="50" y2="50"/>
    <line x1="50" x2="600" y1="100" y2="100"/>
    <line x1="50" x2="600" y1="150" y2="150"/>
    <line x1="50" x2="600" y1="200" y2="200"/>
    <line x1="50" x2="600" y1="250" y2="250"/>
  </g>
  <g class="months">
    <text x="50" y="325">Jan.</text>
    <text x="100" y="325">Feb.</text>
    <text x="150" y="325">Mar.</text>
    <text x="200" y="325">Apr.</text>
    <text x="250" y="325">May.</text>
    <text x="300" y="325">Jun.</text>
    <text x="350" y="325">Jul.</text>
    <text x="400" y="325">Aug.</text>
    <text x="450" y="325">Sep.</text>
    <text x="500" y="325">Oct.</text>
    <text x="550" y="325">Nov.</text>
    <text x="600" y="325">Dec.</text>
  </g>
  __AVERAGE__
  __POLYLINE__
  __CIRCLE__
</svg>`
    return { svg }
  }
}