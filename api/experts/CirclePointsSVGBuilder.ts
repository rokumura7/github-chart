import Expert from "./Expert";
import { ResultBySVGBuilder, ActivitiesDataPerMonth } from "../types";

interface Props {
  activities: ActivitiesDataPerMonth[]
  diameter: number
}

export default class CirclePointsSVGBuilder implements Expert<ResultBySVGBuilder> {
  private x = [...Array(12)].map((_, i) => i * 50 + 50)

  work(props: Props): ResultBySVGBuilder {
    const circleElm = `
<circle cx="_X" cy="_Y">
  <animate attributeName="r" values="2;5;2" dur="1s" repeatCount="indefinite" />
</circle>
`
  const circleElms = [...Array(12)].map((_, i) => i).map(i => {
    const _x = this.x[i]
    const _y = props.activities.find(act => act.month === i)?.totalContributionCount
    if (_y) return circleElm.replace('_X', `${_x}`).replace('_Y', `${300 - _y * props.diameter}`)
    return ''
  })
  const svg = !circleElms ? '' : `
<g r="3" class="circle-points">
  ${circleElms.join('')}
</g>
`
    return { svg }
  }
}