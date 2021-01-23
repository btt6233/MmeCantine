import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-commandes-details',
  templateUrl: './commandes-details.component.html',
  styleUrls: ['./commandes-details.component.css']
})
export class CommandesDetailsComponent implements OnInit {
  public commande = null

  constructor(private router:Router) { }

  ngOnInit(): void {
    this.commande = history.state.data
    console.log(this.commande);
  }

  public validerCommande(idCommande){
    console.log(idCommande);
    
    // this.router.navigate(['commandes-list'])
    
    
    
  }

}
