import { Component, Input, Output,EventEmitter } from '@angular/core';
import { UserDocument } from '../../models/user-document.model';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-document-upload',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './document-upload.component.html',
  styleUrl: './document-upload.component.css'
})
export class DocumentUploadComponent {
 @Input() isEditing!: boolean; 
 @Input() documents!: UserDocument[];
 @Output() documentUploaded = new EventEmitter<{ name:string, type:string }>();

 onFileSelected(event: Event) {
  const inputElement = event.target as HTMLInputElement;
  if (inputElement.files && inputElement.files.length > 0) {
    const file = inputElement.files[0];
    const document = {
      name: file.name,
      type: file.type
    };
    this.documentUploaded.emit(document);
  }
 }
 getIcon(fileType:string): string {
  switch(fileType) {
    case 'application/pdf':
      return 'fas fa-file-pdf';
    case 'image/jpeg':
    case 'image/png': 
      return 'fas fa-file-image'; 
    case 'application/msword':
    case 'application/vnd.openxmlformats-officedocument.wordprocessingml.document':
      return ' fas fa-file-word'; 
    case 'application/vnd.ms-excel':
    case 'application/vnd.openxmlformats-officedocument.spreadsheeetml.sheet':
      return 'fas fa-file-excel';
  default:
    return 'fas fa-file'; 
  }
 }
}

