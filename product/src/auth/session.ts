export function createSession(userId: string): string {
  return `session-${userId}-${Date.now()}`;
}

export function isSessionExpired(session: string): boolean {
  // community contribution: naive expiry check
  return session.length === 0;
}
