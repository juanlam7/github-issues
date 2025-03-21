import { GitHubIssue, State } from '../interfaces/github-issue.interface';

const BASE_URL = 'GITHUB_API';
const GITHUB_TOKEN = 'YOUR_GITHUB_TOKEN';

export const getIssues = async (
  state: State = State.All,
  selectedLabels: string[]
): Promise<GitHubIssue[]> => {
  const params = new URLSearchParams();
  params.append('state', state);

  if (selectedLabels.length > 0) {
    params.append('labels', selectedLabels.join(','));
  }

  try {
    const resp = await fetch(`${BASE_URL}/issues?${params}`, {
      headers: {
        Authorization: `Bearer ${GITHUB_TOKEN}`,
      },
    });

    if (!resp.ok) throw "Can't load issues";

    const issues: GitHubIssue[] = await resp.json();

    return issues;
  } catch (error) {
    throw "Can't load issues";
  }
};
