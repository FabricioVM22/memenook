import { Injectable, inject } from '@angular/core';

import {
  createNookipediaArtApi,
  createNookipediaBugsApi,
  createNookipediaClothingApi,
  createNookipediaEventsApi,
  createNookipediaFishApi,
  createNookipediaFossilsApi,
  createNookipediaFurnitureApi,
  createNookipediaGyroidsApi,
  createNookipediaInteriorApi,
  createNookipediaItemsApi,
  createNookipediaPhotosApi,
  createNookipediaRecipesApi,
  createNookipediaSeaApi,
  createNookipediaToolsApi,
  createNookipediaVillagersApi,
  type ArtworkParams,
  type ClothingParams,
  type EventsParams,
  type FurnitureParams,
  type GyroidsParams,
  type InteriorParams,
  type ItemDetailsParams,
  type MonthFilterParams,
  type RecipesParams,
  type ThumbsizeParams,
  type VillagersParams,
} from '../../API';
import { NOOKIPEDIA_CONFIG } from './nookipedia.tokens';

@Injectable({
  providedIn: 'root',
})
export class NookipediaService {
  private readonly config = inject(NOOKIPEDIA_CONFIG);

  private readonly villagersApi = createNookipediaVillagersApi(this.config);
  private readonly fishApi = createNookipediaFishApi(this.config);
  private readonly bugsApi = createNookipediaBugsApi(this.config);
  private readonly seaApi = createNookipediaSeaApi(this.config);
  private readonly eventsApi = createNookipediaEventsApi(this.config);
  private readonly artApi = createNookipediaArtApi(this.config);
  private readonly furnitureApi = createNookipediaFurnitureApi(this.config);
  private readonly clothingApi = createNookipediaClothingApi(this.config);
  private readonly interiorApi = createNookipediaInteriorApi(this.config);
  private readonly toolsApi = createNookipediaToolsApi(this.config);
  private readonly photosApi = createNookipediaPhotosApi(this.config);
  private readonly itemsApi = createNookipediaItemsApi(this.config);
  private readonly recipesApi = createNookipediaRecipesApi(this.config);
  private readonly fossilsApi = createNookipediaFossilsApi(this.config);
  private readonly gyroidsApi = createNookipediaGyroidsApi(this.config);

  // Villagers
  getVillagers(params?: VillagersParams) {
    return this.villagersApi.getVillagers(params);
  }

  // Fish
  getFish(params?: MonthFilterParams) {
    return this.fishApi.getFish(params);
  }

  getFishByName(fish: string, params?: ThumbsizeParams) {
    return this.fishApi.getFishByName(fish, params);
  }

  // Bugs
  getBugs(params?: MonthFilterParams) {
    return this.bugsApi.getBugs(params);
  }

  getBugByName(bug: string, params?: ThumbsizeParams) {
    return this.bugsApi.getBugByName(bug, params);
  }

  // Sea
  getSeaCreatures(params?: MonthFilterParams) {
    return this.seaApi.getSeaCreatures(params);
  }

  getSeaCreatureByName(seaCreature: string, params?: ThumbsizeParams) {
    return this.seaApi.getSeaCreatureByName(seaCreature, params);
  }

  // Events
  getEvents(params?: EventsParams) {
    return this.eventsApi.getEvents(params);
  }

  // Art
  getArtwork(params?: ArtworkParams) {
    return this.artApi.getArtwork(params);
  }

  getArtworkByName(artwork: string, params?: ThumbsizeParams) {
    return this.artApi.getArtworkByName(artwork, params);
  }

  // Furniture
  getFurniture(params?: FurnitureParams) {
    return this.furnitureApi.getFurniture(params);
  }

  getFurnitureByName(furniture: string, params?: ThumbsizeParams) {
    return this.furnitureApi.getFurnitureByName(furniture, params);
  }

  // Clothing
  getClothing(params?: ClothingParams) {
    return this.clothingApi.getClothing(params);
  }

  getClothingByName(clothing: string, params?: ThumbsizeParams) {
    return this.clothingApi.getClothingByName(clothing, params);
  }

  // Interior
  getInterior(params?: InteriorParams) {
    return this.interiorApi.getInterior(params);
  }

  getInteriorByName(item: string, params?: ItemDetailsParams) {
    return this.interiorApi.getInteriorByName(item, params);
  }

  // Tools
  getTools(excludedetails?: boolean) {
    return this.toolsApi.getTools(excludedetails);
  }

  getToolByName(tool: string, params?: ThumbsizeParams) {
    return this.toolsApi.getToolByName(tool, params);
  }

  // Photos
  getPhotos(excludedetails?: boolean) {
    return this.photosApi.getPhotos(excludedetails);
  }

  getPhotoByName(item: string, params?: ThumbsizeParams) {
    return this.photosApi.getPhotoByName(item, params);
  }

  // Items
  getItems(excludedetails?: boolean) {
    return this.itemsApi.getItems(excludedetails);
  }

  getItemByName(item: string, params?: ThumbsizeParams) {
    return this.itemsApi.getItemByName(item, params);
  }

  // Recipes
  getRecipes(params?: RecipesParams) {
    return this.recipesApi.getRecipes(params);
  }

  getRecipeByName(item: string, params?: ThumbsizeParams) {
    return this.recipesApi.getRecipeByName(item, params);
  }

  // Fossils
  getIndividualFossils(params?: ThumbsizeParams) {
    return this.fossilsApi.getIndividualFossils(params);
  }

  getIndividualFossilByName(fossil: string, params?: ThumbsizeParams) {
    return this.fossilsApi.getIndividualFossilByName(fossil, params);
  }

  getFossilGroups(params?: ThumbsizeParams) {
    return this.fossilsApi.getFossilGroups(params);
  }

  getFossilGroupByName(fossilGroup: string, params?: ThumbsizeParams) {
    return this.fossilsApi.getFossilGroupByName(fossilGroup, params);
  }

  getAllFossils(params?: ThumbsizeParams) {
    return this.fossilsApi.getAllFossils(params);
  }

  getFossilByName(fossil: string, params?: ThumbsizeParams) {
    return this.fossilsApi.getFossilByName(fossil, params);
  }

  // Gyroids
  getGyroids(params?: GyroidsParams) {
    return this.gyroidsApi.getGyroids(params);
  }

  getGyroidByName(gyroid: string, params?: ThumbsizeParams) {
    return this.gyroidsApi.getGyroidByName(gyroid, params);
  }
}
