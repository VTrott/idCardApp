import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AccountInfoComponent } from '../account-info/account-info.component';
import { AddressInfoComponent } from '../address-info/address-info.component';
import { PersonalInfoComponent } from '../personal-info/personal-info.component';
import { DocumentUploadComponent } from '../document-upload/document-upload.component';

@Component({
  selector: 'app-id-card',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AccountInfoComponent,
    AddressInfoComponent,
    PersonalInfoComponent,
    DocumentUploadComponent
  ],
  templateUrl: './id-card.component.html',
  styleUrl: './id-card.component.css'
})
export class IdCardComponent {

}
