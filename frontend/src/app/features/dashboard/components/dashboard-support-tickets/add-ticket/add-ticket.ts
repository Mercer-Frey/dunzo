import { Component, inject, signal } from '@angular/core';
import { Button } from '@shared/components/button/button';
import { TicketPayload } from '@features/dashboard/models/support-tickets.model';
import { Field, form } from '@angular/forms/signals';
import { SupportTicketsService } from '@features/dashboard/services/support-tickets.service';

@Component({
  selector: 'app-add-ticket',
  imports: [
    Button,
    Field
  ],
  templateUrl: './add-ticket.html',
})
export class AddTicket {
  private readonly supportTicketService = inject(SupportTicketsService);
  private readonly addTicketModel = signal<TicketPayload>({ title: '', request: '', });
  protected readonly addTicketForm = form(this.addTicketModel);

  protected onSubmit($event: SubmitEvent) {
    $event.preventDefault();
    this.supportTicketService.addTicket(this.addTicketModel());
  }
}
