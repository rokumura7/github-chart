import Expert from './Expert';
import { fetchActivities } from '../GitHubApi';
import { aggregateMonth } from '../Helper';
import { ActivitiesDataPerWeek, ActivitiesDataPerMonth, ResultByAnalyst } from '../../types';

type Activities4Analyst = {
  activities: ActivitiesDataPerMonth[];
  maxValue: number;
  average: number;
};

interface Props {
  username: string;
}

export default class GitHubAnalyst implements Expert<ResultByAnalyst> {
  async work(props: Props): Promise<ResultByAnalyst> {
    const thisYearActivities = await this.fetch(props.username, true);
    const lastYearActivities = await this.fetch(props.username, false);
    const diameter = this.calcDiameter(thisYearActivities.maxValue, lastYearActivities.maxValue);
    return {
      thisYearActivities: thisYearActivities.activities,
      lastYearActivities: lastYearActivities.activities,
      thisYearAverage: thisYearActivities.average,
      lastYearAverage: lastYearActivities.average,
      diameter,
    };
  }

  private fetch = async (username: string, isThisYear: boolean): Promise<Activities4Analyst> => {
    const current = new Date().getFullYear();
    const year = isThisYear ? current : current - 1;
    const activities = this.aggregate(
      (await fetchActivities(username, year)).data.data.user.contributionsCollection.contributionCalendar.weeks,
    );
    const maxValue = this.findMaxValue(activities);
    const average = this.clacAverage(activities, isThisYear ? new Date().getMonth() + 1 : 12);
    return { activities, maxValue, average };
  };

  private aggregate = (activities: ActivitiesDataPerWeek[]) => aggregateMonth(activities);

  private findMaxValue = (activities: ActivitiesDataPerMonth[]) =>
    activities.reduce((a, b) => (a.totalContributionCount > b.totalContributionCount ? a : b)).totalContributionCount;

  private clacAverage = (activities: ActivitiesDataPerMonth[], denominator: number) =>
    Math.round(activities.reduce((total, act) => total + act.totalContributionCount, 0)) / denominator;

  private calcDiameter = (x: number, y: number) => {
    const maxValue = x > y ? x : y;
    return maxValue > 250 ? 250 / maxValue : 1;
  };
}
