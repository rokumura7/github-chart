export type ActivitiesDataPerDay = {
  contributionCount: number
  date: string
}

export type ActivitiesDataPerWeek = {
  contributionDays: ActivitiesDataPerDay[]
}

export type ActivitiesDataPerMonth = {
  month: number
  totalContributionCount: number
}

export type ActivitiesResponseData = {
  data: {
    user: {
      contributionsCollection: {
        contributionCalendar: {
          totalContributions: number
          weeks: ActivitiesDataPerWeek[]
        }
      }
    }
  }
}

export type ResultByAnalyst = {
  thisYearActivities: ActivitiesDataPerMonth[]
  lastYearActivities: ActivitiesDataPerMonth[]
  thisYearAverage: number
  lastYearAverage: number
  diameter: number
}

export type ResultBySVGBuilder = {
  svg: string
}

export type ResultByStylist = {
  style: string
}
