import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-account-info',
  standalone: true,
  imports: [],
  templateUrl: './account-info.component.html',
  styleUrl: './account-info.component.css'
})
export class AccountInfoComponent {
@Input() firstName!:string;
@Input() lastName!:string;
@Input() email!:string;
@Input() phoneNumber!:string;
}