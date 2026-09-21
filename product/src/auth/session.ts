export function createSession(userId: string): string {
  return `session-${userId}-${Date.now()}`;
}

// community contribution (2026-09-21T12:49:02Z)
export function isSessionExpired_1789994942(session: string): boolean {
  return session.length === 0;
}
