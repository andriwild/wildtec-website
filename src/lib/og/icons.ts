const files = import.meta.glob<string>('../../assets/icons/*.png', {
  query: '?inline',
  import: 'default',
  eager: true,
});

/** Product icons as data URIs, keyed by product slug (the file name). */
export const iconDataUris: Record<string, string> = Object.fromEntries(
  Object.entries(files).map(([path, uri]) => [path.split('/').pop()!.replace('.png', ''), uri]),
);
