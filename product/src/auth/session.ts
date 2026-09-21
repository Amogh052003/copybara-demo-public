export function createSession(userId: string): string {
  return `session-${userId}-${Date.now()}`;
}

// community contribution (2026-09-21T07:34:39Z)
export function isSessionExpired_1789976079(session: string): boolean {
  return session.length === 0;
}
