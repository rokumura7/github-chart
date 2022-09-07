import { AverageLineSVGBuilder, CirclePointsSVGBuilder, OutlineSVGBuilder, PolylineSVGBuilder } from './index';
import { ResultByAnalyst, ResultBySVGBuilder } from '../../types';
import Expert from './expert';

interface Props {
  specification: ResultByAnalyst;
}

export default class SVGBuilder implements Expert<ResultBySVGBuilder> {
  work(props: Props): ResultBySVGBuilder {
    const thisYearAvg = props.specification.thisYearAverage;
    const lastYearAvg = props.specification.lastYearAverage;
    const diameter = props.specification.diameter;
    const activities = props.specification.thisYearActivities;

    const outline = new OutlineSVGBuilder().work();
    const averageLines = new AverageLineSVGBuilder().work({ thisYearAvg, lastYearAvg, diameter });
    const thisYearPolyline = new PolylineSVGBuilder().work({ activities, diameter, isThisYear: true });
    const lastYearPolyline = new PolylineSVGBuilder().work({ activities, diameter });
    const ciclePoints = new CirclePointsSVGBuilder().work({ activities, diameter });
    const svg = outline.svg
      .replace(/__AVERAGE__/g, averageLines.svg)
      .replace(/__POLYLINE__/g, [thisYearPolyline.svg, lastYearPolyline.svg].join(''))
      .replace(/__CIRCLE__/g, ciclePoints.svg);
    return { svg };
  }
}
