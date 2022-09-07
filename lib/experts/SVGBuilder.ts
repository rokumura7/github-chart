import { AverageLineSVGBuilder, CirclePointsSVGBuilder, OutlineSVGBuilder, PolylineSVGBuilder } from './index';
import { ResultByAnalyst, ResultBySVGBuilder } from '../../types';
import Expert from './Expert';

interface Props {
  specification: ResultByAnalyst;
}

export default class SVGBuilder implements Expert<ResultBySVGBuilder> {
  work(props: Props): ResultBySVGBuilder {
    const outline = new OutlineSVGBuilder().work();
    const averageLines = new AverageLineSVGBuilder().work({
      thisYearAvg: props.specification.thisYearAverage,
      lastYearAvg: props.specification.lastYearAverage,
      diameter: props.specification.diameter,
    });
    const thisYearPolyline = new PolylineSVGBuilder().work({
      activities: props.specification.thisYearActivities,
      diameter: props.specification.diameter,
      isThisYear: true,
    });
    const lastYearPolyline = new PolylineSVGBuilder().work({
      activities: props.specification.lastYearActivities,
      diameter: props.specification.diameter,
      isThisYear: false,
    });
    const ciclePoints = new CirclePointsSVGBuilder().work({
      activities: props.specification.thisYearActivities,
      diameter: props.specification.diameter,
    });
    const svg = outline.svg
      .replace(/__AVERAGE__/g, averageLines.svg)
      .replace(/__POLYLINE__/g, [thisYearPolyline.svg, lastYearPolyline.svg].join(''))
      .replace(/__CIRCLE__/g, ciclePoints.svg);
    return { svg };
  }
}
