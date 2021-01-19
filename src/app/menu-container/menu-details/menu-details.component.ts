import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Menu } from 'src/app/shared/models/menu.model';
import { Order } from 'src/app/shared/models/order.model';
import { Quantity } from 'src/app/shared/models/quantity.model';
import { User } from 'src/app/shared/models/user';
import { MenuService } from 'src/app/shared/services/menu.service';
import { OrderService } from 'src/app/shared/services/order.service';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-menu-details',
  templateUrl: './menu-details.component.html',
  styleUrls: ['./menu-details.component.css']
})
export class MenuDetailsComponent implements OnInit {

  public menu: Menu | null = null;
  public user: User;
  public message: string = null
  public messageType: boolean = null

  constructor(
    private menuService: MenuService,
    private activatedRoute: ActivatedRoute,
    private orderService: OrderService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.menuService.findMenuById(params.id).subscribe((menu: Menu) => {
        this.menu = menu;
      });
    });

    this.user = this.userService.getCurrentUser();

  }

  public addCommande(menu) {
    if (window.confirm('Passer la commande ?')) {
      if (this.user.wallet >= menu.priceDF) {

        let order = new Order(this.user.id, 1, [new Quantity(1, null, menu.id)]);
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
