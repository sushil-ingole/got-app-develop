import { Component, OnDestroy, OnInit } from '@angular/core';
import { GotInfoService } from '../../services/got-info.service';
import { ICharacter } from '../../models/models';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CardsComponent } from '../cards/cards.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [MatProgressSpinnerModule, MatCardModule, MatButtonModule, CardsComponent],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.scss'
})
export class CatalogComponent implements OnInit, OnDestroy {

  loading: boolean = true;
  delay: number = 500;
  characters!: ICharacter[];
  charactersSubscription!: Subscription;

  constructor(private gotService: GotInfoService) { }

  ngOnInit(): void {
    if (this.gotService.characters?.length) {
      this.characters = this.gotService.characters;
      this.loading = false;
    } else {
      this.loadCharsFromAPI();
    }
  }

  loadCharsFromAPI() {
    this.charactersSubscription = this.gotService.Characters().subscribe((data: ICharacter[]) => {
      if (data.length) {
        this.gotService.characters = this.characters = data;
      }
      this.loading = false;
    });
  }

  ngOnDestroy(): void {
    this.charactersSubscription.unsubscribe();
  }
}
