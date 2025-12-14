import { Component, inject } from '@angular/core';
import { AddTicket } from '@features/dashboard/components/dashboard-support-tickets/add-ticket/add-ticket';
import { SupportTicketsService } from '@features/dashboard/services/support-tickets.service';
import { TicketItem } from '@features/dashboard/components/dashboard-support-tickets/ticket-item/ticket-item';

@Component({
  selector: 'app-dashboard-support-tickets',
  imports: [
    AddTicket,
    TicketItem
  ],
  templateUrl: './dashboard-support-tickets.component.html',
})
export class DashboardSupportTickets {
  private readonly supportTicketsService = inject(SupportTicketsService);
  protected readonly tickets = this.supportTicketsService.tickets;
}
