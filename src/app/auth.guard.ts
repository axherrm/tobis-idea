import {ActivatedRoute, CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {VoteStore} from "./vote-store.service";
import {AdminComponent} from "./admin/admin.component";

export const authGuard: CanActivateFn = (route, state) => {
  const voteStore = inject(VoteStore);
  const router = inject(Router);

  if (voteStore.authenticated()) {
    return true;
  } else {
    router.navigate(['auth']).then();
    return false;
  }
};
