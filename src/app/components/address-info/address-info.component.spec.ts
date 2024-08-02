import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressInfoComponent } from './address-info.component';
import { User } from '../../models/user.model';
import { By } from '@angular/platform-browser';

describe('AddressInfoComponent', () => {
  let component: AddressInfoComponent;
  let fixture: ComponentFixture<AddressInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddressInfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddressInfoComponent);
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
    const input = fixture.debugElement.query(By.css('#home-address-form')).nativeElement;
    input.value = '456 Another St';
    input.dispatchEvent(new Event('input'));
    expect(component.userChange.emit).toHaveBeenCalledWith({...component.user, homeAddress: '456 Another St'});
  });

});
