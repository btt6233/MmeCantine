import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from 'src/app/shared/models/order.model';
import { OrderService } from 'src/app/shared/services/order.service';
import * as moment from 'moment';

@Component({
  selector: 'app-commandes-list',
  templateUrl: './commandes-list.component.html',
  styleUrls: ['./commandes-list.component.css']
})
export class CommandesListComponent implements OnInit {
  public commandes = null;
  public allCommandes = null
  // public dateDebut = "2020-01-12"
  // public dateFin = "2020-01-12"
  public dateDuJour = moment().format("YYYY-MM-DD")

  constructor(private orderService: OrderService,private router :Router) { }

  ngOnInit(): void {
    this.orderService.findAllOrderDateBetween(this.dateDuJour,this.dateDuJour).subscribe((orders: Order[]) => {
      this.allCommandes = orders
      this.commandes = this.countCommandes()
      console.log(this.commandes);
    })
  }

  public countCommandes() {
    let commandes = []

    this.allCommandes.forEach(commande => {

      let quantities = commande.quantity

      quantities.forEach(quantity => {

        if (quantity.menu) {
          if (!commandes.find(x => x.preparation.id == quantity.menu.id)) {
            commandes.push({nombre:1,preparation:quantity.menu,users:[{idCommande:commande.id,user:commande.user}]})
          }
          else{
            let index = commandes.findIndex(x => x.preparation.id == quantity.menu.id)
            commandes[index].nombre++
            commandes[index].users.push({idCommande:commande.id,user:commande.user})
          }
        }
        else{
          if (!commandes.find(x => x.preparation.id == quantity.meal.id)) {
            commandes.push({nombre:1,preparation:quantity.meal,users:[{idCommande:commande.id,user:commande.user}]})
          }
          else{
            let index = commandes.findIndex(x => x.preparation.id == quantity.meal.id)
            commandes[index].nombre++
            commandes[index].users.push({idCommande:commande.id,user:commande.user})
          }
        }

      });

    });
    
    return commandes;

  }

  public seeDetails(commande){
    this.router.navigate(['commandes-detail'], { state: {data: commande} });
  }

}
