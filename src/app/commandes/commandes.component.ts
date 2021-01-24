import { Component, OnInit } from '@angular/core';
import { Order } from '../shared/models/order.model';
import { OrderService } from '../shared/services/order.service';

const STATUS = ["En attente", "Valider", "Annuler"]

@Component({
  selector: 'app-commandes',
  templateUrl: './commandes.component.html',
  styleUrls: ['./commandes.component.css']
})
export class CommandesComponent implements OnInit {
  public commandes: Order[];
  public status = STATUS

  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
    this.orderService.findAllOrderByUserId().subscribe((orders: Order[]) => {
      this.commandes = orders;
      this.commandes = this.commandes.reverse()
    });
  }
}
