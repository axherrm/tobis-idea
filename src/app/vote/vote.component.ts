import { Component } from '@angular/core';
import {KeyValuePipe, NgForOf} from "@angular/common";
import {ButtonModule} from "primeng/button";

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
  title = 'tobis-app';
  protected readonly Participants = Participants;
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
