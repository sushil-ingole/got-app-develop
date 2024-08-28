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
  paginatedCharacters: any[] = [];
  @Input() pageSize = 10;
  currentPage = 1;
  totalPages = 0;

  ngOnInit(): void {
    this.totalPages = Math.ceil(this.characters.length / this.pageSize);
    this.paginateItems();
  }

  paginateItems(): void {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.paginatedCharacters = this.characters.slice(startIndex, endIndex);
  }

  goToPage(page: number): void {
    if (page < 1 || page > this.totalPages) return;
    this.currentPage = page;
    this.paginateItems();
  }

  nextPage(): void {
    this.goToPage(this.currentPage + 1);
  }

  previousPage(): void {
    this.goToPage(this.currentPage - 1);
  }
}
