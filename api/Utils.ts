import { ActivitiesDataPerMonth, ActivitiesDataPerWeek } from "./types";

const aggregateMonth = (weeks: ActivitiesDataPerWeek[]): ActivitiesDataPerMonth[] => {
  return [...Array(12)].map((_, i) => i).map(i => {
    const commits = weeks.filter(w => w.contributionDays.some(d => new Date(d.date).getMonth() === i))
      .map(w => w.contributionDays.reduce((sum, d) => {
        return sum + d.contributionCount
      }, 0))
    const totalContributionCount = commits.reduce((sum, c) => {
        return sum + c
      }, 0)
    return {
      month: i,
      totalContributionCount,
    }
  })
}

export { aggregateMonth }