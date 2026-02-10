const basePath = process.env.NODE_ENV === 'production' ? '/ai-webinar-slides' : '';

export function assetPath(path: string): string {
  return `${basePath}${path}`;
}
