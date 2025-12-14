export const SERVER_STATUSES = {
  ONLINE: 'online',
  OFFLINE: 'offline',
  UNKNOWN: 'unknown',
} as const;

export type ServerStatus = (typeof SERVER_STATUSES)[keyof typeof SERVER_STATUSES];