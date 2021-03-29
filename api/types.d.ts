export type ActivitiesDataPerWeek = {
  contributionDays: [
    {
      contributionCount: number
      date: string
    }
  ]
}

export type ActivitiesDataPerMonth = {
  month: number
  totalContributionCount: number
}

export type ActivitiesResponseData = {
  user: {
    name: string
    login: string
    contributionsCollection: {
      contributionCalendar: {
        totalContributions: number
        weeks: ActivitiesDataPerWeek[]
      }
    }
  }
}