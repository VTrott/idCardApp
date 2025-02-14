import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AccountInfoComponent } from '../account-info/account-info.component';
import { AddressInfoComponent } from '../address-info/address-info.component';
import { PersonalInfoComponent } from '../personal-info/personal-info.component';
import { DocumentUploadComponent } from '../document-upload/document-upload.component';
import { User } from '../../models/user.model';
import { UserDocument } from '../../models/user.model';
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
export class IdCardComponent implements OnInit{
  isEditing :boolean = false;
  user!: User;
  
  constructor(private userService: UserService) {}
  ngOnInit(){
    this.user = this.userService.getUser();
  }
  
  toggleEdit() {
    this.isEditing = !this.isEditing;
  }

  onSubmit() {
    if(!this.isEditing) {
     this.userService.updateUser(this.user);
    }
    this.toggleEdit();
  }
  
  onUserChange( updatedUser: User){
    this.user = updatedUser;
  }

  onDocumentUploaded( document: {name: string, type: string }) {
    const newDocument: UserDocument = {
      name: document.name,
      type: document.type
    }
    this.userService.addDocument(newDocument);
    this.user = this.userService.getUser(); // Refresh user data 
  }
}
