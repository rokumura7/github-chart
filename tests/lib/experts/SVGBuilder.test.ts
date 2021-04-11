import { SVGBuilder } from '../../../lib/experts'

describe('SVGBuilder.work', () => {
  it('should return svg', () => {
    const actual = new SVGBuilder().work({
      specification: {
        thisYearActivities: [
          {"month": 0, "totalContributionCount": 3},
          {"month": 1, "totalContributionCount": 3},
          {"month": 2, "totalContributionCount": 3},
          {"month": 3, "totalContributionCount": 3},
          {"month": 4, "totalContributionCount": 3},
          {"month": 5, "totalContributionCount": 3},
          {"month": 6, "totalContributionCount": 3},
          {"month": 7, "totalContributionCount": 3},
          {"month": 8, "totalContributionCount": 3},
          {"month": 9, "totalContributionCount": 3},
          {"month": 10, "totalContributionCount": 3},
          {"month": 11, "totalContributionCount": 3}
        ],
        lastYearActivities: [
          {"month": 0, "totalContributionCount": 2},
          {"month": 1, "totalContributionCount": 2},
          {"month": 2, "totalContributionCount": 2},
          {"month": 3, "totalContributionCount": 2},
          {"month": 4, "totalContributionCount": 2},
          {"month": 5, "totalContributionCount": 2},
          {"month": 6, "totalContributionCount": 2},
          {"month": 7, "totalContributionCount": 2},
          {"month": 8, "totalContributionCount": 2},
          {"month": 9, "totalContributionCount": 2},
          {"month": 10, "totalContributionCount": 2},
          {"month": 11, "totalContributionCount": 2}
        ],
        thisYearAverage: 3,
        lastYearAverage: 2,
        diameter: 1
      }
    }).svg
    expect(actual).toContain('<svg')
    expect(actual).toContain('<polyline')
  })
})