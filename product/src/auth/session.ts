export function createSession(userId: string): string {
  return `session-${userId}-${Date.now()}`;
}
// final verification contribution
