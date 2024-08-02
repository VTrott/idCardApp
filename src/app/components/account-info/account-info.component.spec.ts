import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountInfoComponent } from './account-info.component';
import { User } from '../../models/user.model';
import { By } from '@angular/platform-browser';

describe('AccountInfoComponent', () => {
  let component: AccountInfoComponent;
  let fixture: ComponentFixture<AccountInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccountInfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountInfoComponent);
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
    const input = fixture.debugElement.query(By.css('#firstName')).nativeElement;
    input.value = 'Jane';
    input.dispatchEvent(new Event('input'));
    expect(component.userChange.emit).toHaveBeenCalledWith({...component.user,firstName: 'Jane'});
  });
});
