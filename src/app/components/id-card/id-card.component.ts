import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { AccountInfoComponent } from '../account-info/account-info.component';
import { AddressInfoComponent } from '../address-info/address-info.component';
import { PersonalInfoComponent } from '../personal-info/personal-info.component';
import { DocumentUploadComponent } from '../document-upload/document-upload.component';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';

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
  isEditing :boolean = false;
  editForm!: FormGroup;
  user: User = new User;
  
  constructor(private fb: FormBuilder, private userService: UserService) {
    this.user = this.userService.getUser();
    this.editForm = this.fb.group({
      firstName:[this.user.firstName],
      lastName: [this.user.lastName],
      email: [this.user.email],
      phoneNumber: [this.user.phoneNumber],
      homeAddress: [this.user.homeAddress],
      mailingAddress:[this.user.mailingAddress],
      ssn:[this.user.ssn],
      birthday:[this.user.birthday],
      medicareId:[this.user.medicareId]
    });
  }

  toggleEdit() {
    this.isEditing = !this.isEditing;
    if(!this.isEditing) {
      this.editForm.reset(this.user);
    }
  }

  onSubmit() {
    if(this.editForm.valid) {
      this.userService.updateUser(this.editForm.value);
      this.user = this.editForm.value;
      this.toggleEdit();
    }
  }
}
