import req from './HttpClient'

export const fetchActivities = (username: string) => {
  const variables = {
    username
  }
  return req(
  {
    query: `
    query userInfo($username: String!) {
      user(login: $username) {
        name
        login
        contributionsCollection(from: "2020-01-01T00:00:00", to: "2020-12-31T23:59:59") {
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
  })
}