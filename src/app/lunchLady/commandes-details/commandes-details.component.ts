import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderService } from 'src/app/shared/services/order.service';

@Component({
  selector: 'app-commandes-details',
  templateUrl: './commandes-details.component.html',
  styleUrls: ['./commandes-details.component.css']
})
export class CommandesDetailsComponent implements OnInit {
  public commande = null

  constructor(private router: Router, private orderService: OrderService) { }

  ngOnInit(): void {
    this.commande = history.state.data
    console.log(this.commande);
  }

  public validerCommande(idCommande) {
    this.orderService.validerUneCommande(idCommande).subscribe((res: any) => {
      this.router.navigate(['commandes-list'])
    }, (err) => {
      console.log(err);
    })
  }

}
