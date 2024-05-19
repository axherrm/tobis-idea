import {Component, inject} from '@angular/core';
import {ButtonModule} from "primeng/button";
import {RestClientService} from "../rest-client.service";

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [
    ButtonModule
  ],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent {
  protected reset = false;
  protected error = false;
  private restService = inject(RestClientService);

  clear() {
    this.reset = false;
    this.error = false;
    this.restService.reset().then(() => this.reset = true).catch(() => this.error = true);
  }
}
