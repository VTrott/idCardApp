import { UserDocument } from "./user-document.model";

export interface User {
    firstName: string;
    lastName: string;
    email:string; 
    phoneNumber:string;
    homeAddress:string;
    mailingAddress:string;
    ssn: string;
    birthday: string;
    medicareId:string;
    documents: UserDocument[];    
}
export { UserDocument };

