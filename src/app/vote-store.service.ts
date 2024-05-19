import {patchState, signalStore, withComputed, withMethods, withState} from "@ngrx/signals";
import {computed, inject} from "@angular/core";
import {Participants} from "./vote/vote.component";
import {RestClientService} from "./rest-client.service";

export type Vote = {
  username: string,
  vote: Participants | null
}

export const VoteStore = signalStore(
  {providedIn: 'root'},
  withState({
    username: '',
    vote: '',
    result: []
  }),
  withMethods((store) => {
    const restService = inject(RestClientService);

    return {
      authenticate(username: string) {
        patchState(store, {
          username: username
        });
        console.log(`User authenticated! ${store.username()}`)
      },
      vote(vote: string) {
        restService.vote(vote, store.username()).then(() => patchState(store, {
          vote: vote
        }));
      }
    }
  }),
  withComputed(({username}) => ({
      authenticated: computed(() => username().length >= 3),
      adminAuthenticated: computed(() => username() === 'ur mum gay')
    }),
  ),
  // TODO: do restService.fetchResults() all 5 sec or smth
  // TODO: sync with local storage
);
