export function createSession(userId: string): string {
  return `session-${userId}-${Date.now()}`;
}

export function isSessionExpired(session) {
  return session.length === 0;
}
