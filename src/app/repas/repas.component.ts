import { Component, OnInit } from '@angular/core';
import { Meal } from '../shared/models/meal.model';
import { Order } from '../shared/models/order.model';
import { Quantity } from '../shared/models/quantity.model';
import { User } from '../shared/models/user';
import { MealService } from '../shared/services/meal.service';
import { OrderService } from '../shared/services/order.service';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-repas',
  templateUrl: './repas.component.html',
  styleUrls: ['./repas.component.css']
})
export class RepasComponent implements OnInit {
  public meals: Meal[];
  public user: User;
  public message: string = null
  public messageType: boolean = null

  constructor(
    private mealService: MealService,
    private orderService: OrderService,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.mealService.findAllAvailableForToday().subscribe((meals: Meal[]) => {
      this.meals = meals;
    });

    this.user = this.userService.getCurrentUser();
  }

  public addCommande(meal) {
    if (window.confirm('Passer la commande ?')) {
      if (this.user.wallet >= meal.priceDF) {

        let order = new Order(this.user.id, 1, [new Quantity(1, meal.id,null)]);
        this.orderService.addOrder(order).subscribe(
          (order: Order) => {
            this.message = "Commande effectuer"
            this.messageType = true

            setTimeout(() => {
              this.message = null
              this.messageType = null
            }, 3000);
          },
          (err) => {
            console.log();
            this.message = err.error.exceptionMessage
            this.messageType = false

            setTimeout(() => {
              this.message = null
              this.messageType = null
            }, 3000);
          }
        );
      }
      else {
        this.message = "Fond insufisant, merci d'aller voir la cantiniere"
        this.messageType = false

        setTimeout(() => {
          this.message = null
          this.messageType = null
        }, 3000);
      }
    }
  }

}
