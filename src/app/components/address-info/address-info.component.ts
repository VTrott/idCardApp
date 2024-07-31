import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-address-info',
  standalone: true,
  imports: [],
  templateUrl: './address-info.component.html',
  styleUrl: './address-info.component.css'
})
export class AddressInfoComponent {
@Input() homeAddress!:string;
@Input() mailingAddress!:string;
}
