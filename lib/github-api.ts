import axios from 'axios';
import conf from './my-config';
import { ActivitiesResponseData } from '../types';

const headers = {
  Authorization: `bearer ${conf.token}`,
};

export const client = axios.create({ baseURL: 'https://api.github.com', timeout: 3000 });

export const fetchActivities = async (username: string, year: number) => {
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
