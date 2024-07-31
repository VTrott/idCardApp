import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-address-info',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './address-info.component.html',
  styleUrl: './address-info.component.css'
})
export class AddressInfoComponent {
@Input() homeAddress!: string;
@Input() mailingAddress!: string;
@Input() isEditing!: boolean;
}
