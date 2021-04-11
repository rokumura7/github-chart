[![ci](https://github.com/rokumura7/github-chart/actions/workflows/ci.yml/badge.svg)](https://github.com/rokumura7/github-chart/actions/workflows/ci.yml)
[![Maintainability](https://api.codeclimate.com/v1/badges/264a8304f34582046f72/maintainability)](https://codeclimate.com/github/rokumura7/github-chart/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/264a8304f34582046f72/test_coverage)](https://codeclimate.com/github/rokumura7/github-chart/test_coverage)

![dependencies](https://david-dm.org/rokumura7/github-chart.svg)
![devDependencies](https://david-dm.org/rokumura7/github-chart/dev-status.svg)
![GitHub last commit](https://img.shields.io/github/last-commit/rokumura7/github-chart)

![GitHub](https://img.shields.io/github/license/rokumura7/github-chart)

![GitHub forks](https://img.shields.io/github/forks/rokumura7/github-chart?style=social)
![GitHub Repo stars](https://img.shields.io/github/stars/rokumura7/github-chart?style=social)

[![github-chart](https://github-chart.vercel.app/api?user=rokumura7)](https://github.com/rokumura7/github-chart)

# github-chart 📈

github-chart will chart your monthly commit count :octocat:

```markdown
[![github-chart](https://github-chart.vercel.app/api?user=rokumura7)](https://github.com/rokumura7/github-chart)
```

## for Developers 👾

### Contributing Guide :heart_eyes:

1. Report a issue and discuss
1. Fork the repo and create new branch from main
1. Implement an enhancement on your local
1. Issue that Pull Request to main

### Setting Guide :bulb:

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
