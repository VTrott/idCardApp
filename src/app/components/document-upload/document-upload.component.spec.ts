import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentUploadComponent } from './document-upload.component';
import { By } from '@angular/platform-browser';

describe('DocumentUploadComponent', () => {
  let component: DocumentUploadComponent;
  let fixture: ComponentFixture<DocumentUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocumentUploadComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocumentUploadComponent);
    component = fixture.componentInstance;
    component.isEditing = true;
    component.documents = [];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit document on file selected', () => {
    spyOn(component.documentUploaded, 'emit');
    const input = fixture.debugElement.query(By.css('input[type=file')).nativeElement;
    const file = new File([''], 'test.pdf', { type:'application/pdf'});
    const event = { target: { files:[file] }} as unknown as Event;

    component.onFileSelected(event);

    expect(component.documentUploaded.emit).toHaveBeenCalledWith({ name: 'test.pdf', type:'application/pdf'});
  });

  it('should display "Documents" header if documents are present', () => {
    component.documents = [{ name: 'test.pdf', type:'application/pdf' }];
    fixture.detectChanges();
    const header = fixture.debugElement.query(By.css('h4'));
    expect(header.nativeElement.textContent).toBe('Documents');
  });

  it('should not display "Documents" header if no documents are present and not editing', () => {
    component.documents = [];
    component.isEditing = false; 
    fixture.detectChanges();
    const header = fixture.debugElement.query(By.css('h4'));
    expect(header).toBeNull();
  });

  it('should display "Documents" header if no documents are present but editing', () => {
    component.documents = []; 
    component.isEditing = true; 
    fixture.detectChanges();
    const header = fixture.debugElement.query(By.css('h4'));
    expect(header.nativeElement.textContent).toBe('Documents');
  });

  it('should not display document icons when in editing mode', () => {
    component.documents = [{ name: 'test.pdf', type:'application/pdf'}];
    component.isEditing = true;
    fixture.detectChanges();
    const documentItems = fixture.debugElement.queryAll(By.css('.document-item'));
    expect(documentItems.length).toBe(0);
  });

  it('should display document icons when not in editing mode', () => {
    component.documents = [{ name: 'test.pdf', type:'application/pdf'}];
    component.isEditing = false;
    fixture.detectChanges();
    const documentItems = fixture.debugElement.queryAll(By.css('.document-item'));
    expect(documentItems.length).toBe(1);
    expect(documentItems[0].nativeElement.innerHTML).toContain('test.pdf');
  });
});
