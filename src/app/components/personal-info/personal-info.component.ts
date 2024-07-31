import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-personal-info',
  standalone: true,
  imports: [],
  templateUrl: './personal-info.component.html',
  styleUrl: './personal-info.component.css'
})
export class PersonalInfoComponent {
@Input() ssn!: string;
@Input() birthday!: string;
@Input() medicareId!: string;
}
