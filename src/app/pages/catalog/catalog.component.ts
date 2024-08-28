import { Component, OnInit } from '@angular/core';
import { GotInfoService } from '../../services/got-info.service';
import { ICharacter } from '../../models/models';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [MatProgressSpinnerModule, MatCardModule, MatButtonModule],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.scss'
})
export class CatalogComponent implements OnInit {

  loading: boolean = true;
  delay: number = 500;
  characters!: ICharacter[];

  constructor(private gotService: GotInfoService) {}

  ngOnInit(): void {
    if(this.gotService.characters?.length) {
      this.characters = this.gotService.characters;
      this.loading = false;
    } else {
      this.loadCharsFromAPI();
    }
  }

  loadCharsFromAPI() {
    this.gotService.
      Characters().
      subscribe((data: ICharacter[]) => {
        if(data.length) {
          this.gotService.characters = this.characters = data;
        }
        this.loading = false;
      });
  }
}
