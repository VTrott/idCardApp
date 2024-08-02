import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdCardComponent } from './id-card.component';
import { UserService } from '../../services/user.service';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { User } from '../../models/user.model';

describe('IdCardComponent', () => {
  let component: IdCardComponent;
  let fixture: ComponentFixture<IdCardComponent>;
  let userService: jasmine.SpyObj<UserService>;

  beforeEach(async () => {
    const userSeviceSpy = jasmine.createSpyObj('UserService',['getUser', 'updateUser', 'addDocument']);
    await TestBed.configureTestingModule({
      imports: [IdCardComponent],
      providers: [
        {provide: UserService ,useValue: userSeviceSpy}
      ],
      schemas:[NO_ERRORS_SCHEMA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdCardComponent);
    component = fixture.componentInstance;
    userService =TestBed.inject(UserService) as jasmine.SpyObj<UserService>;
    userService.getUser.and.returnValue({
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
    } as User);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle edit mode', () =>{
    component.toggleEdit();
    expect(component.isEditing).toBeTrue();
    component.toggleEdit();
    expect(component.isEditing).toBeFalse();
  });

  it('should update user data on user change',()=>{
    const updatedUser: User = {...component.user, firstName:'Jane'};
    component.onUserChange(updatedUser);
    expect(component.user.firstName).toBe('Jane');
  });

  it('should add document on document upload', () =>{
    const document = {name: 'test.pdf', type:'application/pdf'};
    component.onDocumentUploaded(document);
    expect(userService.addDocument).toHaveBeenCalledWith(document);
  })
});
