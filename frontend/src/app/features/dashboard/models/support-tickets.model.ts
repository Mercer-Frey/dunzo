export const TICKET_STATUS = {
  OPEN: 'open',
  CLOSED: 'closed',
} as const;

export interface TicketPayload {
  title: string;
  request: string;
}

export interface Ticket extends TicketPayload {
  id: string;
  status: TicketStatus;
}

export type TicketStatus = (typeof TICKET_STATUS)[keyof typeof TICKET_STATUS];
