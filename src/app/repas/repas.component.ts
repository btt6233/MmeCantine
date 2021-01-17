import { Component, OnInit } from '@angular/core';
import { Meal } from '../shared/models/meal.model';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-repas',
  templateUrl: './repas.component.html',
  styleUrls: ['./repas.component.css']
})
export class RepasComponent implements OnInit {
  public meals: Meal[];
  public user: User;

  constructor(
    private mealService: MealService,
    private orderService: OrderService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.mealService.findAllAvailableForToday().subscribe((meals: Meal[]) => {
      this.meals = meals;
      console.log(this.meals);
    });

    this.user = this.userService.getUser();
  }

  public addCommande(meal) {
    if (window.confirm('Passer la commande ?')) {
      let order = new Order(this.user.id, 1, [new Quantity(1, meal.id)]);
      this.orderService.addOrder(order).subscribe(
        (order: Order) => {
          console.log(order);
        },
        (err) => {
          console.log(err);
        }
      );
    }
  }

}
