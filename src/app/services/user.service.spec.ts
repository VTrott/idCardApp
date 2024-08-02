import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';
import { User, UserDocument } from '../models/user.model';

describe('UserService', () => {
  let service: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return user data', () =>{
    const user = service.getUser();
    expect(user).toEqual({
      firstName:'Ebony',
      lastName:'Moore',
      email: 'EbonyMoore456@gmail.com',
      phoneNumber: '(216)835-9545',
      homeAddress:'123 Maple Street,Cleveland,OH 44119',
      mailingAddress: '10th West, 456 Apple Street, Cleveland, OH 44127',
      ssn: '235-71-1083',
      birthday:'05/09/1998',
      medicareId: '1EG4-TE5-MK73',
      documents: []
    } as User);
  });

  it('should update user data', () => {
    const updatedUser: User = {
      firstName: 'Jane',
      lastName: 'Doe',
      email:'jane.doe@example.com',
      phoneNumber:'987-654-3210',
      homeAddress:' 456 Another St, Hometown, USA',
      mailingAddress: 'PO Box 123, Hometown, USA',
      ssn: '987-65-4321',
      birthday: '02/02/1990',
      medicareId:'B987654321',
      documents:[]
    };
    service.updateUser(updatedUser);
    expect(service.getUser()).toEqual(updatedUser);
  });

  it('should add a document', () => {
    const document : UserDocument = {name: 'test.pdf', type: 'application/pdf'};
    service.addDocument(document);
    expect(service.getUser().documents).toContain(document);
  })
});
