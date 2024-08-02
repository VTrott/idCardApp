import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalInfoComponent } from './personal-info.component';
import { User } from '../../models/user.model';
import { By } from '@angular/platform-browser';

describe('PersonalInfoComponent', () => {
  let component: PersonalInfoComponent;
  let fixture: ComponentFixture<PersonalInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonalInfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonalInfoComponent);
    component = fixture.componentInstance;
    component.isEditing =true;
    component.user = {
      firstName: 'John',
      lastName: 'Doe',
      email:'john.doe@example.com',
      phoneNumber:'123-456-7890',
      homeAddress:'123 Main St, Hometown, USA',
      mailingAddress: 'PO Box 456, Hometown,USA',
      ssn: '123-45-6789',
      birthday:'01/01/1980',
      medicareId:'A123456789',
      documents: []
    } as User;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit user change on input change', ()=>{
    spyOn(component.userChange,'emit');
    const input = fixture.debugElement.query(By.css('#ssn')).nativeElement;
    input.value = '987-65-4321';
    input.dispatchEvent(new Event('input'));
    expect(component.userChange.emit).toHaveBeenCalledWith({...component.user, ssn:'987-65-4321'});
  });
  
});
