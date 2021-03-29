import { ActivitiesDataPerMonth } from "./types";

export default class SVGBuilder {
  private _currentYearActivities: ActivitiesDataPerMonth[] = []
  private _lastYearActivities: ActivitiesDataPerMonth[] = []
  private diameter = 50
  private currentYearAvg = 0
  private lastYearAvg = 0
  private x = [...Array(12)].map((_, i) => i * 50 + 50)

  private constructor() {}
  static prepare = () => new SVGBuilder()

  currentYearActivities = (_currentYearActiveties: ActivitiesDataPerMonth[]) => {
    this._currentYearActivities = _currentYearActiveties
    return this
  }

  lastYearActivities = (_lastYearActivities: ActivitiesDataPerMonth[]) => {
    this._lastYearActivities = _lastYearActivities
    return this
  }

  private setDiameter = () => {
    const fetchMaxCount = (activities: ActivitiesDataPerMonth[]) => activities.reduce((a, b) => a.totalContributionCount > b.totalContributionCount ? a : b).totalContributionCount
    const currentMaxCount = fetchMaxCount(this._currentYearActivities)
    const lastMaxCount = fetchMaxCount(this._lastYearActivities)
    const maxCount = (currentMaxCount > lastMaxCount ? currentMaxCount : lastMaxCount)
    this.diameter = maxCount > 250 ? 250 / maxCount : 1
  }

  private setAvg = () => {
    const sum = (activities: ActivitiesDataPerMonth[]) => activities.reduce((total, act) => total + act.totalContributionCount, 0)
    console.log(sum(this._currentYearActivities))
    console.log(new Date().getMonth() + 1)
    this.currentYearAvg = Math.round(sum(this._currentYearActivities) / (new Date().getMonth() + 1))
    this.lastYearAvg = Math.round(sum(this._lastYearActivities) / 12)
  }

  private buildActivities = (isCurrent = false) => {
    const points = [...Array(12)].map((_, i) => i).map(i => {
      const _x = this.x[i]
      const _y = (isCurrent ? this._currentYearActivities : this._lastYearActivities).find(act => act.month === i)?.totalContributionCount
      if (_y) return `${_x},${300 - _y * this.diameter}`
      return ''
    })
    return `
      <polyline class="history-polyline" stroke="${isCurrent ? '#ACA' : '#CAA'}"
        ${isCurrent ? 'current' : ''}
        points="${points.join(' ')}"
      />
    `
  }

  private buildCircles = () => {
    const circleElm = `
      <circle cx="_X" cy="_Y">
        <animate attributeName="r" values="2;4;2" dur="1s" repeatCount="indefinite" />
      </circle>
      `
    const circleElms = [...Array(12)].map((_, i) => i).map(i => {
      const _x = this.x[i]
      const _y = this._currentYearActivities.find(act => act.month === i)?.totalContributionCount
      if (_y) return circleElm.replace('_X', `${_x}`).replace('_Y', `${300 - _y * this.diameter}`)
      return ''
    })
    if (circleElms) return `
      <g r="3" fill="#CFC">
        ${circleElms.join('')}
      </g>
    `
    return ''
  }

  private buildAvgs = () => {
    const avgElm = '<line x1="50" y1="_AVG" x2="600" y2="_AVG" opacity="0.5" stroke="_COLOR" />'
    const elms = []
    if (this.currentYearAvg > 0) elms.push(avgElm.replace(/_AVG/g, `${300 - this.currentYearAvg * this.diameter}`).replace('_COLOR', '#ACA'))
    if (this.lastYearAvg > 0) elms.push(avgElm.replace(/_AVG/g, `${300 - this.lastYearAvg * this.diameter}`).replace('_COLOR', '#CAA'))
    return elms.join('')
  }

  build = () => {
    this.setDiameter()
    this.setAvg()
    const lastPolyline = this.buildActivities()
    const currentPolyline = this.buildActivities(true)
    const avgLine = this.buildAvgs()
    const circles = this.buildCircles()
    const currentYear = new Date().getFullYear();
    const lastYear = currentYear - 1;
    return `
      <svg width="650" height="350" viewBow="0,0,650,350">
        <line x1="50" y1="15" x2="75" y2="15" stroke="#aca" />
        <text x="80" y="20" fill="#aca">${currentYear}：Avg. ${this.currentYearAvg}</text>
        <line x1="50" y1="35" x2="75" y2="35" stroke="#caa" />
        <text x="80" y="40" fill="#caa">${lastYear}：Avg. ${this.lastYearAvg}</text>

        <line x1="50" y1="50" x2="50" y2="300" stroke="#ccc" />
        <line x1="50" y1="300" x2="600" y2="300" stroke="#ccc" />

        <g stroke="#777" opacity="0.1"  >
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
          <line x1="50" x2="600" y1="300" y2="300"/>
          <line x1="50" x2="600" y1="350" y2="350"/>
          <line x1="50" x2="600" y1="400" y2="400"/>
          <line x1="50" x2="600" y1="450" y2="450"/>
          <line x1="50" x2="600" y1="500" y2="500"/>
          <line x1="50" x2="600" y1="550" y2="550"/>
          <line x1="50" x2="600" y1="600" y2="600"/>
      </g>

        ${lastPolyline}
        ${currentPolyline}

        ${avgLine}

        ${circles}
        <g fill="#ccc">
          <text x="35" y="325" word-spacing="24">Jan. Feb. Mar. Apr. May. Jun. Jul. Aug. Sep. Oct. Nov. Dec.</text>
        </g>
      </svg>
    `
  }
}