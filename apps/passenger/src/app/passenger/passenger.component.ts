import { Component } from '@angular/core';
import { AuthService } from '@flight-workspace/shared/auth-lib';

@Component({
  selector: 'flight-workspace-passenger',
  templateUrl: './passenger.component.html',
  styleUrls: ['./passenger.component.css']
})
export class PassengerComponent {
  constructor(authService: AuthService) {
    console.log('userName', authService.userName);
   }
 
}
