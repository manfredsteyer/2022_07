import {Component} from '@angular/core';
import { AuthService } from '@flight-workspace/shared/auth-lib';

@Component({
  selector: 'flight-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(authService: AuthService) {
   authService.login('John'); 
  }

}
