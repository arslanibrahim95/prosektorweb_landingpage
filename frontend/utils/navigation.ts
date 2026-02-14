export function openExternalByDevice(url: string, desktopMinWidth = 768) {
  if (typeof window === 'undefined') return;

  const isDesktop = window.matchMedia(`(min-width: ${desktopMinWidth}px)`).matches;
  if (isDesktop) {
    window.open(url, '_blank', 'noopener,noreferrer');
    return;
  }

  window.location.assign(url);
}
