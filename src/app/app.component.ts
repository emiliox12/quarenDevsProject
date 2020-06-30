import { Component } from '@angular/core';
import { ApiRequestService } from './services/api-request'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ApiRequestService]
})
export class AppComponent {
  title = 'my-new-proyect';
}
