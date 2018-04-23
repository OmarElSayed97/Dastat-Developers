import { Component, OnInit } from '@angular/core';
import {AdminTicketService} from "../../@services/admin-ticket.service";
import {CookieService} from "angular2-cookie/core";

@Component({
  selector: 'app-verify-ticket',
  templateUrl: './verify-ticket.component.html',
  styleUrls: ['./verify-ticket.component.scss']
})
export class VerifyTicketComponent implements OnInit {

  reservation_id = null;
  ticketView = null;
  adminUsername = this.cookie.get("adminUsername");
  ticketIsLoaded = false;
  error = null;

  ticketVerified = true;
  btn_verifyTicket = 'Verify Ticket';

  constructor(public adminTicketService: AdminTicketService, public cookie: CookieService) { }

  ngOnInit() {
    if(!this.cookie.get("reservation_id")) {
      this.reservation_id = this.cookie.get('reservation_id');
      this.ticketView = this.cookie.get('ticketView');
    }
  }



  getTicket(event) {
    this.reservation_id = event.target.value;
    console.log(this.reservation_id);

    if (this.reservation_id) {
      try {
        this.adminTicketService.viewTicketInfo('some admin', this.reservation_id)
          .subscribe((res) => {
            //TODO check response status
            if (!res.err && res.data) {
              this.ticketView = res.data;
              this.ticketIsLoaded = true;
              if (this.ticketView.payment.data[0]) {
                this.ticketVerified = true;
                this.btn_verifyTicket = 'Verified';
              } else {
                this.ticketVerified = false;
                this.btn_verifyTicket = 'Verify Ticket';
              }
            } else {
              this.ticketIsLoaded = false;
              this.ticketVerified = false;
              this.btn_verifyTicket = 'Verify Ticket';
            }
          });
      } finally {
        this.ticketIsLoaded = false;
        this.ticketVerified = true;
        this.btn_verifyTicket = 'Verify Ticket';
      }

      console.log(this.ticketView);
    } else {
      this.ticketView = null;
    }

    if(!this.ticketView) {
      this.ticketIsLoaded = false;
      this.ticketVerified = true;
      this.btn_verifyTicket = 'Verify Ticket';
    }
  }

  verifyTicket() {
    console.log('VERIFY TICKET TO BE DONE');
    console.log(this.reservation_id);
    console.log(this.ticketView.payment.data[0]);
    if (this.ticketView && !this.ticketView.payment.data[0]) {
      this.adminTicketService.verifyUnpaidTicket('some admin', this.ticketView.reservation_id)
        .subscribe((res) => {
          if(res.data) {
            this.ticketVerified = true;
            this.btn_verifyTicket = 'Verified';
          }
        });
    }

  }



}