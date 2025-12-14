import { Component, inject, input, signal } from '@angular/core';
import { Ticket, TICKET_STATUS } from '@features/dashboard/models/support-tickets.model';
import { SupportTicketsService } from '@features/dashboard/services/support-tickets.service';

@Component({
  selector: 'app-ticket-item',
  imports: [],
  templateUrl: './ticket-item.html',
  styleUrls: ['./ticket-item.scss']
})
export class TicketItem {
  readonly ticket = input.required<Ticket>();
  protected readonly TICKET_STATUS = TICKET_STATUS;
  protected readonly isDetailsVisible = signal(false);
  private readonly supportTicketService = inject(SupportTicketsService);

  protected onToggleDetails() {
    this.isDetailsVisible.update(bool => !bool);
  }

  protected onMarkAsCompleted() {
    this.supportTicketService.closeTicket(this.ticket().id);
    this.isDetailsVisible.update(() => false);
  }
}
