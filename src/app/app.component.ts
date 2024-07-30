import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IdCardComponent } from './id-card/id-card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, IdCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'idCardApp';
}
