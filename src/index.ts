import { VercelRequest, VercelResponse } from '@vercel/node'
import { fetchActivities } from './GitHubApi'
import SVGBuilder from './SVGBuilder'
import { aggregateMonth } from './Utils'

export default async (req: VercelRequest, res: VercelResponse) => {
  console.log(req)
  const currentYear = new Date().getFullYear();
  const currentActivities = (await fetchActivities('rokumura7', currentYear)).data.data.user.contributionsCollection.contributionCalendar.weeks
  const lastYear = currentYear - 1;
  const lastActivities = (await fetchActivities('rokumura7', lastYear)).data.data.user.contributionsCollection.contributionCalendar.weeks
  const svg = SVGBuilder.prepare()
    .currentYearActivities(aggregateMonth(currentActivities))
    .lastYearActivities(aggregateMonth(lastActivities))
    .build()
  console.log(svg)
  res.setHeader("Content-Type", "image/svg+xml")
  return res.status(200).send(svg)
}