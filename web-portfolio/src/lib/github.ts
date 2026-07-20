export interface GitHubRepo {
  name: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  topics: string[];
  html_url: string;
  homepage: string | null;
  created_at: string;
  updated_at: string;
  size: number;
  default_branch: string;
  open_issues_count: number;
}

export interface GitHubProfile {
  login: string;
  name: string;
  bio: string | null;
  avatar_url: string;
  html_url: string;
  public_repos: number;
  followers: number;
  following: number;
  created_at: string;
}

export async function fetchGitHubProfile(): Promise<GitHubProfile | null> {
  try {
    const res = await fetch("/api/github?type=profile", { cache: "no-store" });
    if (!res.ok) return null;
    return res.json();
  } catch {
    return null;
  }
}

export async function fetchGitHubRepos(): Promise<GitHubRepo[]> {
  try {
    const res = await fetch("/api/github?type=repos", { cache: "no-store" });
    if (!res.ok) return [];
    return res.json();
  } catch {
    return [];
  }
}

export function getLanguageStats(repos: GitHubRepo[]): Record<string, number> {
  const langs: Record<string, number> = {};
  repos.forEach((repo) => {
    if (repo.language) {
      langs[repo.language] = (langs[repo.language] || 0) + 1;
    }
  });
  return Object.fromEntries(
    Object.entries(langs).sort(([, a], [, b]) => b - a)
  );
}
