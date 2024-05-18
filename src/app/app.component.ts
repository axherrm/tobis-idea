import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {ButtonModule} from 'primeng/button';
import {KeyValuePipe, NgForOf} from "@angular/common"


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ButtonModule, KeyValuePipe, NgForOf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
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
