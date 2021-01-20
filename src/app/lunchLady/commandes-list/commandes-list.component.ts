import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/shared/models/order.model';
import { OrderService } from 'src/app/shared/services/order.service';

@Component({
  selector: 'app-commandes-list',
  templateUrl: './commandes-list.component.html',
  styleUrls: ['./commandes-list.component.css']
})
export class CommandesListComponent implements OnInit {
  public commandes = null;
  // public dateDebut = "2020-01-12"
  // public dateFin = "2020-01-12"

  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
    this.orderService.findAllOrderDateBetween().subscribe((orders: Order[]) => {
      this.commandes = orders
      console.log(this.commandes);
      this.countCommandes()
    })
  }

  public countCommandes() {
    let meals = null
    let menus = null
    let commandes = null

    this.commandes.forEach(commande => {

      let quantities = commande.quantity

      quantities.forEach(quantity => {

        if (quantity.menu) {
          menus++
        }
        else{
          meals++
        }

      });

    });

    console.log(`il y a ${meals} plats et ${menus} menus`);

  }

}
