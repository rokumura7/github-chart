import { fetchActivities } from '../api/GitHubApi'

jest.mock('../api/HttpClient', () => jest.fn(() => {}))

describe('GitHubApi.fetchActivities', () => {
  it('should return activities', async () => {
    const actual = await fetchActivities('github-chart-test', 2021)
    expect(actual).not.toBeNull()
  })
})