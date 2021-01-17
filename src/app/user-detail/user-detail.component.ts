import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable, CompletionObserver } from 'rxjs';
import { User } from '../shared/models/user';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  // public user: User {
  //   id: "",
  //   sex?: number,
  //   nom: string,
  //   prenom: string,
  //   email: string,
  // };
  // public user: User = {
  //   id: null,
  //   nom: ""
  // };

  public user: User | null = null;

  constructor(
    private userService: UserService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.userService.findById(params.id).subscribe((res: any) => {
        this.user = res;
      });
    });
  }

}