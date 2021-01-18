import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Route } from '@angular/router';
import { Observable, CompletionObserver } from 'rxjs';
import { User } from '../shared/models/user';
import { UserService } from '../shared/services/user.service';
import { HttpClient } from '@angular/common/http';

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
  token: string | null = null;
  public user: User | null = null;

  constructor(
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private http: HttpClient,
  ) { }

  ngOnInit(): void {
        this.getToken();
        // this.getById(this.user.id);
        // console.log(this.token);

          this.activatedRoute.params.subscribe(params => {

            let id = params['id'];
            this.http.get('http://localhost:8080/lunchtime/user/find/' + id).subscribe((user: User) => {
              localStorage.getItem("Authorization");
              this.user = user;
            });
         });        
      }
  

  getToken(){
    return this.token = localStorage.getItem("Authorization");
  }


}
