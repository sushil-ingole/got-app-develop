import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ICharacter } from '../../models/models';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [MatProgressSpinnerModule, MatCardModule, MatButtonModule],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss'
})
export class CardsComponent {
  @Input() characters!: ICharacter[];
}
