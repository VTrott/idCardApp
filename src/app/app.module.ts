import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { IdCardComponent } from './id-card/id-card.component'; // Adjust the path if necessary

@NgModule({
  declarations: [
    AppComponent,
    IdCardComponent  // Ensure this line is present
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
