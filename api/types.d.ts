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
}