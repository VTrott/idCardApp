import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { IdCardComponent } from './components/id-card/id-card.component'; 

@NgModule({
  declarations: [
    AppComponent,
    IdCardComponent 
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
