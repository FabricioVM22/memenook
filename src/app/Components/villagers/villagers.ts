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
