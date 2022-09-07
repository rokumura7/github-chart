import { VercelRequest, VercelResponse } from '@vercel/node';
import { GitHubAnalyst, SVGBuilder, Stylist } from '../lib/experts/';

export default async (req: VercelRequest, res: VercelResponse) => {
  const username = req.query['user'] as string;

  const specification = await new GitHubAnalyst().work({ username });
  const svg = new SVGBuilder().work({ specification }).svg;
  const style = new Stylist().work().style;
  const result = svg.replace(/__STYLES__/g, style);

  res.setHeader('Content-Type', 'image/svg+xml');
  return res.status(200).send(result);
};
