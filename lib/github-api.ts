import axios from 'axios';
import conf from './my-config';
import { ActivitiesResponseData } from '../types';

export const client = axios.create({ baseURL: 'https://api.github.com', timeout: 3000 });

export const fetchActivities = async (username: string, year: number) => {
  const token = conf.token ?? '';
  console.log('----------');
  console.log(token);
  console.log('----------');
  const headers = {
    Authorization: `bearer ${token}`,
  };
  const data = {
    query: `query userInfo($username: String!) {
      user(login: $username) {
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
    }`,
    variables: { username },
  };
  return client.post<ActivitiesResponseData>('/graphql', data, { headers });
};
