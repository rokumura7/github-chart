import MockAdapter from 'axios-mock-adapter';
import { fetchActivities, client } from '../../lib/github-api';

const mockAxios = new MockAdapter(client);

describe('GitHubApi.fetchActivities', () => {
  it('should return activities', async () => {
    mockAxios.onPost('/graphql').reply(200);
    const actual = await fetchActivities('github-chart-test', 2021);
    expect(actual).not.toBeNull();
  });
});
