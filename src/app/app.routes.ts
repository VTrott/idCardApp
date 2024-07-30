import { Routes } from '@angular/router';
import { IdCardComponent } from './id-card/id-card.component';
import { AccountInfoComponent } from './account-info/account-info.component';
import { AddressInfoComponent } from './address-info/address-info.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { DocumentUploadComponent } from './document-upload/document-upload.component';

export const routes: Routes = [
  { path: '', component: IdCardComponent }, // Default route
  { path: 'account-info', component: AccountInfoComponent },
  { path: 'address-info', component: AddressInfoComponent },
  { path: 'personal-info', component: PersonalInfoComponent },
  { path: 'document-upload', component: DocumentUploadComponent }
];

