import { Routes } from '@angular/router';
import {AuthComponent} from "./auth/auth.component";
import {authGuard} from "./auth.guard";
import {VoteComponent} from "./vote/vote.component";
import {AdminComponent} from "./admin/admin.component";

export const routes: Routes = [
  { path: 'vote', component: VoteComponent, canActivate: [authGuard] },
  { path: 'admin', component: AdminComponent, canActivate: [authGuard] },
  { path: 'auth', component: AuthComponent},
  { path: '**', redirectTo: 'vote' }
];
