import { ActivitiesResponseData } from './types'
import req from './HttpClient'

export const fetchActivities = async (username: string, year: number) => {
  const variables = {
    username
  }
  const data = {
    query: `
    query userInfo($username: String!) {
      user(login: $username) {
        name
        login
        contributionsCollection(from: "${year}-01-01T00:00:00", to: "${year}-12-31T23:59:59") {
          contributionCalendar {
            totalContributions
            weeks {
              contributionDays {
                contributionCount
                date
              }
            }
          }
        }
      }
    }
    `,
    variables,
  }
  return req<ActivitiesResponseData>(data)
}