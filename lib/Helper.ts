import { ActivitiesDataPerMonth, ActivitiesDataPerWeek } from "../types";

const aggregateMonth = (weeks: ActivitiesDataPerWeek[]): ActivitiesDataPerMonth[] => {
  return [...Array(12)].map((_, i) => i).map(i => {
    const totalContributionCount = weeks
      .map(w => w.contributionDays
        .filter(d => new Date(d.date).getMonth() === i)
        .reduce((sum, d) => sum + d.contributionCount, 0))
      .reduce((sum, commits) => sum + commits)
    return {
      month: i,
      totalContributionCount,
    }
  })
}

export { aggregateMonth }