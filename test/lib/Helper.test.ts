import { aggregateMonth } from '../../lib/helper';

describe('Helper.aggregateMonth', () => {
  it('should return activities data per month', () => {
    const before = [
      {
        contributionDays: [
          { contributionCount: 1, date: '2021-01-01' },
          { contributionCount: 1, date: '2021-01-02' },
        ],
      },
      {
        contributionDays: [
          { contributionCount: 5, date: '2021-02-01' },
          { contributionCount: 10, date: '2021-03-02' },
        ],
      },
    ];
    const after = aggregateMonth(before);
    const expected = [
      { month: 0, totalContributionCount: 2 },
      { month: 1, totalContributionCount: 5 },
      { month: 2, totalContributionCount: 10 },
      { month: 3, totalContributionCount: 0 },
      { month: 4, totalContributionCount: 0 },
      { month: 5, totalContributionCount: 0 },
      { month: 6, totalContributionCount: 0 },
      { month: 7, totalContributionCount: 0 },
      { month: 8, totalContributionCount: 0 },
      { month: 9, totalContributionCount: 0 },
      { month: 10, totalContributionCount: 0 },
      { month: 11, totalContributionCount: 0 },
    ];
    expect(after).toStrictEqual(expected);
  });
});
