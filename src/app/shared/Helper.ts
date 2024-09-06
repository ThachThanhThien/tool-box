export function copyToClipboard(value: string | null) {
  navigator.clipboard.writeText(value || '').then();
}

export function randomInRange(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min
}
