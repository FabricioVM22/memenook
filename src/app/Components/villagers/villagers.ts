import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NookipediaService } from '../../services/nookipedia.service';

interface Villager {
  name: string;
  species: string;
  personality: string;
  gender: string;
}

@Component({
  selector: 'app-villagers',
  imports: [CommonModule, FormsModule],
  templateUrl: './villagers.html',
  styleUrl: './villagers.css',
})
export class Villagers implements OnInit {
  sortColumn: keyof Villager = 'name';
  sortDirection: 'asc' | 'desc' = 'asc';

  sortVillagers(column: keyof Villager) {
    if (this.sortColumn === column) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortColumn = column;
      this.sortDirection = 'asc';
    }

    const directionFactor = this.sortDirection === 'asc' ? 1 : -1;

    this.villagers = [...this.villagers].sort((a, b) => {
      const left = a[column] ?? '';
      const right = b[column] ?? '';
      return left.localeCompare(right, 'es', { sensitivity: 'base' }) * directionFactor;
    });
  }

  private readonly nookipedia = inject(NookipediaService);

  villagers: Villager[] = [];
  searchTerm = '';
  isLoading = false;
  errorMessage = '';

  async ngOnInit() {
    await this.loadVillagers();
    
  }

  get filteredVillagers(): Villager[] {
    const term = this.searchTerm.trim().toLowerCase();
    if (!term) {
      return this.villagers;
    }

    return this.villagers.filter((villager) =>
      villager.name.toLowerCase().includes(term),
    );
  }



  private async loadVillagers() {
    this.isLoading = true;
    this.errorMessage = '';

    try {
      const data = await this.nookipedia.getVillagers();
      this.villagers = (Array.isArray(data) ? data : []) as Villager[];
    } catch (error) {
      console.error('Error loading villagers', error);
      this.errorMessage =
        'No se pudieron cargar los residentes. Revisa tu API key en app.config.ts.';
    } finally {
      this.isLoading = false;
    }
  }
}
