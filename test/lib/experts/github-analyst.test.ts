import { GitHubAnalyst } from '../../../lib/experts';

jest.mock('../../../lib/github-api', () => {
  return {
    fetchActivities: jest.fn(() => ({
      data: {
        data: {
          user: {
            contributionsCollection: {
              contributionCalendar: {
                totalContributions: 100,
                weeks: [
                  {
                    contributionDays: [{ contributionCount: 1, date: '2021-01-01' }],
                  },
                  {
                    contributionDays: [{ contributionCount: 2, date: '2022-01-01' }],
                  },
                ],
              },
            },
          },
        },
      },
    })),
  };
});

describe('GitHubAnalyst', () => {
  it('should return specification', async () => {
    const actual = await new GitHubAnalyst().work({ username: 'rokumura7' });
    expect(actual.diameter).toBe(1);
  });
});
