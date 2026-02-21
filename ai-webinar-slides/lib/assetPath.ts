const basePath = process.env.NEXT_PUBLIC_GITHUB_PAGES === 'true' ? '/ai-webinar-slides' : '';

export function assetPath(path: string): string {
  return `${basePath}${path}`;
}
