# Accounts for this folder

Always connect to these two accounts. Do not switch this project to another GitHub repo or another Vercel team.

## 1. GitHub

- Repo: `numini-co/PetClear`
- URL: https://github.com/numini-co/PetClear
- Remote: `git@github.com:numini-co/PetClear.git`
- Branch: `main`
- Working `gh` login: `ddandanell` (active). `numini-co` is also logged in on this machine.

## 2. Vercel

- Team: Numini (`team_fVzrn4d5I1giSnLrnwsiBC1S`)
- Project: `pet-clear` (`prj_i8RqpEBnZPHMa37hefo4V9dwEeNZ`)
- Production: https://dubai-pet-relocation.ae
- Git link on the project: `numini-co/PetClear`

The API token is project-scoped. It is stored in this folder at `.env.vercel` (mode 600, ignored by git) and copied at `~/.config/petclear/vercel.env`. Load it with `source .env.vercel` and let the CLI read `VERCEL_TOKEN`. Do not print the token. Do not commit `.env.vercel`.

`vercel whoami` returns "User not found" with this token. That is the scope. `GET /v9/projects` and `GET /v6/deployments` are the checks that prove it is connected. They return only `pet-clear`.

The Vercel CLI on this machine is also logged in as `server-bali`, and `vercel --scope numini` can see `pet-clear`. Use that only as a fallback. The token in `.env.vercel` is the account for this folder.

## Not this project

The Vercel MCP login reaches Master Server only (`daviddandanell-9392s-projects`, `team_WumSlShMHjkfsJtedvxDTaDd`). It returns 403 for Numini and cannot see `pet-clear`. Do not use it for this site.
