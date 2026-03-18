import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NookipediaService } from '../../services/nookipedia.service';

interface Item {
  name: string;
  category: string;
  price: string;
  featuredPrice?: string;
  boxPrice?: string;
}

@Component({
  selector: 'app-items',
  imports: [CommonModule, FormsModule],
  templateUrl: './items.html',
  styleUrl: './items.css',
})

export class Items implements OnInit {
sortColumn: keyof Item = 'name';
sortDirection: 'asc' | 'desc' = 'asc';

sortItems(column: keyof Item) {
  if (this.sortColumn === column) {
    this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
  } else {
    this.sortColumn = column;
    this.sortDirection = 'asc';
  }

  const directionFactor = this.sortDirection === 'asc' ? 1 : -1;

  this.items = [...this.items].sort((a, b) => {
    const left = a[column] ?? '';
    const right = b[column] ?? '';
    return left.localeCompare(right, 'es', { sensitivity: 'base' }) * directionFactor;
  });
}

  private readonly nookipedia = inject(NookipediaService);

  items: Item[] = [];
  searchTerm = '';
  isLoading = false;
  errorMessage = '';

  async ngOnInit() {
    await this.loadItems();
    
  }
  
  get filteredItems(): Item[] {
    const term = this.searchTerm.trim().toLowerCase();
    if (!term) {
      return this.items;
    }
    return this.items.filter(item => item.name.toLowerCase().includes(term));
  }

  private async loadItems() {
    this.isLoading = true;
    this.errorMessage = '';
    try {
      const data = await this.nookipedia.getItems();
      this.items = data.map((item: any) => ({
        name: item.name,
        category: item.material_type,
        price: item.sell,
      }));
    } catch (error) {
      console.error('Error loading items:', error);
      this.errorMessage = 'Error al cargar los items. Por favor, inténtalo de nuevo más tarde.';
    } finally {
      this.isLoading = false;
    }
    this.items.map(item => {
      if (item.price === 'N/A') {
        item.featuredPrice = 'N/A';
      } else {
        const priceNum = parseInt(item.price, 10);
        if (!isNaN(priceNum)) {
          item.featuredPrice = (priceNum * 2).toString();
        } else {
          item.featuredPrice = 'N/A';
        }
      }
    });
    this.items.map(item => {
      if (item.price === 'N/A') {
        item.boxPrice = 'N/A';
      } else {
        const priceNum = parseInt(item.price, 10);
        if (!isNaN(priceNum)) {
          item.boxPrice = (priceNum * 0.8).toString();
        } else {
          item.boxPrice = 'N/A';
        }
      }
    });
  }

}
