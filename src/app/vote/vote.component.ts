import {Component, inject} from '@angular/core';
import {KeyValuePipe, NgForOf} from "@angular/common";
import {ButtonModule} from "primeng/button";
import {VoteStore} from "../vote-store.service";

@Component({
  selector: 'app-vote',
  standalone: true,
  imports: [
    NgForOf,
    KeyValuePipe,
    ButtonModule
  ],
  templateUrl: './vote.component.html',
  styleUrl: './vote.component.scss'
})
export class VoteComponent {
  protected readonly Participants = Participants;

  protected voteStore = inject(VoteStore);
  selectedParticipant: undefined;

}

export enum Participants {
  Axl = 'Axl',
  Jil = 'Jil',
  Kim = 'Kim',
  Linora = 'Linora',
  Lulu = 'Lulu',
  Lutzispatzi = 'Lutzispatzi',
  Manuel = 'Manuel',
  Patrick = 'Patrick'
}
