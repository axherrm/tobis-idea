import {Component, inject} from '@angular/core';
import {InputTextModule} from "primeng/inputtext";
import {ButtonModule} from "primeng/button";
import {VoteStore} from "../vote-store.service";
import {Router} from "@angular/router";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [
    InputTextModule,
    ButtonModule,
    FormsModule
  ],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})
export class AuthComponent {
  protected username: string = '';

  private voteStore = inject(VoteStore);

  constructor(private router: Router) {
  }

  login() {
    this.voteStore.authenticate(this.username)
    this.router.navigate(['vote']).then();
  }
}
