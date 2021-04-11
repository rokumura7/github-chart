import { VercelRequest, VercelResponse } from '@vercel/node'
// import { fetchActivities } from './GitHubApi'
// import SVGBuilder from './SVGBuilder'
// import { aggregateMonth } from './Helper'

import {
  GitHubAnalyst,
  SVGBuilder,
} from './experts/'
import Stylist from './experts/Stylist'

export default async (req: VercelRequest, res: VercelResponse) => {
  const username = req.query["user"] as string
  const specification = await new GitHubAnalyst().work({ username })
  const svg = new SVGBuilder().work({ specification }).svg
  const style = new Stylist().work().style
  const result = svg.replace(/__STYLES__/g, style)

  // const currentYear = new Date().getFullYear()
  // const currentActivities = (await fetchActivities(username, currentYear)).data.data.user.contributionsCollection.contributionCalendar.weeks
  // const lastYear = currentYear - 1
  // const lastActivities = (await fetchActivities(username, lastYear)).data.data.user.contributionsCollection.contributionCalendar.weeks
  // const svg = SVGBuilder.prepare()
  //   .currentYearActivities(aggregateMonth(currentActivities))
  //   .lastYearActivities(aggregateMonth(lastActivities))
  //   .build()
  res.setHeader("Content-Type", "image/svg+xml")
  return res.status(200).send(result)
}
