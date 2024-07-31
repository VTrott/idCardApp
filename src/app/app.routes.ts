import { Routes } from '@angular/router';
import { IdCardComponent } from './components/id-card/id-card.component';
import { AccountInfoComponent } from './components/account-info/account-info.component';
import { AddressInfoComponent } from './components/address-info/address-info.component';
import { PersonalInfoComponent } from './components/personal-info/personal-info.component';
import { DocumentUploadComponent } from './components/document-upload/document-upload.component';

export const routes: Routes = [
  { path: '', component: IdCardComponent }, // Default route
  { path: 'account-info', component: AccountInfoComponent },
  { path: 'address-info', component: AddressInfoComponent },
  { path: 'personal-info', component: PersonalInfoComponent },
  { path: 'document-upload', component: DocumentUploadComponent }
];

