import type { PageLoad } from "./$types";

interface Repo {
    [index: string]: any;
}

const headers = {
}

export const load = (async ({ fetch }) => {
    const res: Response = await fetch('https://api.github.com/users/ashwincreates/repos', headers)
    let repos: Repo[] = res.status == 200 ? await res.json() : [];

    console.log(res)

    const repoPromises: { repo: Repo, isPortfolio: boolean }[] = await Promise.all(repos.map(async repo => {
        const res = await fetch(repo.contents_url.replace('{+path}', 'portfolio.json'), headers)
        if (res.status == 200) {
            const portfolio = await res.json();
            const content = JSON.parse(atob(portfolio.content).toString());
            return { repo: { ...repo, ...content }, isPortfolio: true }
        }
        return { repo, isPortfolio: false }
    }))

    repos = repoPromises
        .filter((_, index: number) => repoPromises[index].isPortfolio)
        .map(repo => repo.repo)

    return { repos };
}) satisfies PageLoad
