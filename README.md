# github-chart

```markdown
[![github-chart](https://github-chart.vercel.app/api?user=rokumura7)](https://github.com/rokumura7/github-chart)
```

## for Developers

## Contributing Guide

1. Report a issue and discuss
1. Fork the repo and create new branch from main
1. Implement an enhancement on your local
1. Issue that Pull Request to main

## Setting Guide

Copy the dotenv file.
```bash
cp .env.sample .env
```

Edit the dotenv file to define your GitHub token.
```
vi .env
```

Run the code on your local.
```
vercel dev
```
> NOTE: Please install [Vercel CLI](https://vercel.com/cli) in advance.

Then, go to [localhost:3000/api?user=rokumura7](localhost:3000/api?user=rokumura7).
