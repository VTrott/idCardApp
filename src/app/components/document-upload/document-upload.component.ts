import { Component } from '@angular/core';

@Component({
  selector: 'app-document-upload',
  standalone: true,
  imports: [],
  templateUrl: './document-upload.component.html',
  styleUrl: './document-upload.component.css'
})
export class DocumentUploadComponent {
  uploadDocument(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files) {
      const files = Array.from(input.files);
      console.log('Files uploaded:', files);
    }
  }
}
