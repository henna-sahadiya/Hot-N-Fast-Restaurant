import { Component } from '@angular/core';
import { CardsComponent } from '../../units/cards/cards.component';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CardsComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {

}
