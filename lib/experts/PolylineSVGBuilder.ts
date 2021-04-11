import Expert from "./Expert";
import { ResultBySVGBuilder, ActivitiesDataPerMonth } from "../../types";

interface Props {
  activities: ActivitiesDataPerMonth[]
  diameter: number
  isThisYear: boolean
}

export default class PolylineSVGBuilder implements Expert<ResultBySVGBuilder> {
  private x = [...Array(12)].map((_, i) => i * 50 + 50)

  work(props: Props): ResultBySVGBuilder {
    const points = [...Array(12)].map((_, i) => i).map(i => {
      const _x = this.x[i]
      const _y = props.activities.find(act => act.month === i)?.totalContributionCount
      if (_y) return `${_x},${300 - _y * props.diameter}`
      return ''
    })
    const svg = `
<polyline
  class="${props.isThisYear ? 'this_year' : 'last_year'}"
  points="${points.join(' ')}"
/>
`
    return { svg }
  }
}