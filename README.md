# Id Card Application 

This Angular application displays and manages user information through an editable ID card

## Features 
- **Editable ID Card**: Users can toggle between view and edit modes to update their information.

- **User Information Sections**: The card contains sections for account info, addresses, personal information, and document uploads. 

- **Document Upload**: Users can upload documents, which are displayed with appropriate icons based on the file type. 

## Components 

### IdCardComponent

The parent compone that houses the ID card interface and handles the editing logic.

- **Inputs**:
    -`user`: The user object containing all user information.
- **Outputs**:
    - `onUserChange`: Emits updated user information when changes are made. 

### AccountInfoComponent, AddressInfoComponent, PersonalInfoComponent

Sub-components for displaying and editing specific sections of user information.

- **Inputs**:
    -`isEditing`: Boolean flag indicating if the component is in edit mode.
    - `user`: The user object containing all user information
    - `userChange`: Emits updated user information when changes are made.

### DocumentUploadComponent

Component for uploading and displaying documents. 

- **Inputs**:
    - `isEditing`: Boolean flag indicating if the component is in edit mode.
    - `documents`: Array of document objects. 
- **Outputs**
    - `documentUploaded`: Emits the document object when a new document is uploaded

- The document header won't appear in non-Editing mode unless there are documents uploaded. 

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
