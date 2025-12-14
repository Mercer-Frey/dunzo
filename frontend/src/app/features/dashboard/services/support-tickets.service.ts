import { Injectable, signal } from '@angular/core';
import { Ticket, TICKET_STATUS, TicketPayload } from '@features/dashboard/models/support-tickets.model';

@Injectable({
  providedIn: 'root',
})
export class SupportTicketsService {
  private readonly _tickets = signal<Ticket[]>([]);
  readonly tickets = this._tickets.asReadonly();

  addTicket(data: TicketPayload) {
    const newTicket: Ticket = {
      id: crypto.randomUUID(),
      status: TICKET_STATUS.OPEN,
      ...data,
    };

    this._tickets.update(tickets => [...tickets, newTicket]);
  }

  closeTicket(id: Ticket['id']) {
    this._tickets.update(tickets =>
      tickets.map(ticket =>
        ticket.id === id
          ? { ...ticket, status: TICKET_STATUS.CLOSED }
          : ticket
      )
    );
  }
}
