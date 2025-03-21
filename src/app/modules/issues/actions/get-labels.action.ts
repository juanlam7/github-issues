import { GitHubLabel } from '../interfaces/github-label.interface';

const BASE_URL = 'GITHUB_API';
const GITHUB_TOKEN = 'YOUR_GITHUB_TOKEN';

export const getLabels = async (): Promise<GitHubLabel[]> => {
  try {
    const resp = await fetch(`${BASE_URL}/labels`, {
      headers: {
        Authorization: `Bearer ${GITHUB_TOKEN}`,
      },
    });

    if (!resp.ok) throw "Can't load labels";

    const labels: GitHubLabel[] = await resp.json();

    return labels;
  } catch (error) {
    throw "Can't load labels";
  }
};
