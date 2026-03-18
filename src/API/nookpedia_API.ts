const DEFAULT_BASE_URL = 'https://api.nookipedia.com';
const DEFAULT_API_VERSION = '1.7.0';
const apikey= 'e474b790-c856-4733-a1cb-d8d48a4a4b13';

type QueryPrimitive = string | number | boolean;
type QueryValue = QueryPrimitive | QueryPrimitive[] | undefined;

export type NookipediaQuery = Record<string, QueryValue>;

export interface NookipediaClientConfig {
    apiKey: string;
    apiVersion?: string;
    baseUrl?: string;
}

export class NookipediaApiError extends Error {
    constructor(
        public readonly status: number,
        message: string,
        public readonly details?: unknown,
    ) {
        super(message);
        this.name = 'NookipediaApiError';
    }
}

function toQueryString(query?: NookipediaQuery): string {
    if (!query) {
        return '';
    }

    const search = new URLSearchParams();

    for (const [key, value] of Object.entries(query)) {
        if (value === undefined) {
            continue;
        }

        if (Array.isArray(value)) {
            for (const item of value) {
                search.append(key, String(item));
            }
            continue;
        }

        search.append(key, String(value));
    }

    const serialized = search.toString();
    return serialized ? `?${serialized}` : '';
}

async function request<T>(
    config: NookipediaClientConfig,
    path: string,
    query?: NookipediaQuery,
): Promise<T> {
    const baseUrl = (config.baseUrl ?? DEFAULT_BASE_URL).replace(/\/$/, '');
    const queryString = toQueryString(query);
    const response = await fetch(`${baseUrl}${path}${queryString}`, {
        headers: {
            'X-API-KEY': config.apiKey,
            'Accept-Version': config.apiVersion ?? DEFAULT_API_VERSION,
        },
    });

    if (!response.ok) {
        let body: unknown;
        try {
            body = await response.json();
        } catch {
            body = await response.text();
        }

        throw new NookipediaApiError(
            response.status,
            `Nookipedia request failed: ${response.status} ${response.statusText}`,
            body,
        );
    }

    return (await response.json()) as T;
}

export interface VillagersParams extends NookipediaQuery {
    name?: string;
    species?: string;
    personality?: string;
    game?: string[];
    birthmonth?: string;
    birthday?: string;
    nhdetails?: boolean;
    excludedetails?: boolean;
    thumbsize?: number;
}

export interface MonthFilterParams extends NookipediaQuery {
    month?: string;
    excludedetails?: boolean;
    thumbsize?: number;
}

export interface ThumbsizeParams extends NookipediaQuery {
    thumbsize?: number;
}

export interface EventsParams extends NookipediaQuery {
    date?: string;
    year?: string;
    month?: string;
    day?: number;
}

export interface ArtworkParams extends NookipediaQuery {
    hasfake?: boolean;
    excludedetails?: boolean;
    thumbsize?: number;
}

export interface FurnitureParams extends NookipediaQuery {
    category?: string;
    color?: string[];
    excludedetails?: boolean;
}

export interface ClothingParams extends NookipediaQuery {
    category?: string;
    color?: string[];
    style?: string[];
    labeltheme?: string;
    excludedetails?: boolean;
}

export interface InteriorParams extends NookipediaQuery {
    category?: string;
    color?: string[];
    excludedetails?: boolean;
}

export interface ItemDetailsParams extends NookipediaQuery {
    color?: string[];
    thumbsize?: number;
}

export interface RecipesParams extends NookipediaQuery {
    material?: string[];
    excludedetails?: boolean;
    thumbsize?: number;
}

export interface GyroidsParams extends NookipediaQuery {
    sound?: string;
    excludedetails?: boolean;
}

export function createNookipediaClient(config: NookipediaClientConfig) {
    return {
        // Villagers
        getVillagers: (params?: VillagersParams) =>
            request<unknown[]>(config, '/villagers', params),

        // Fish
        getFish: (params?: MonthFilterParams) => request<unknown>(config, '/nh/fish', params),
        getFishByName: (fish: string, params?: ThumbsizeParams) =>
            request<unknown>(config, `/nh/fish/${encodeURIComponent(fish)}`, params),

        // Bugs
        getBugs: (params?: MonthFilterParams) => request<unknown>(config, '/nh/bugs', params),
        getBugByName: (bug: string, params?: ThumbsizeParams) =>
            request<unknown>(config, `/nh/bugs/${encodeURIComponent(bug)}`, params),

        // Sea creatures
        getSeaCreatures: (params?: MonthFilterParams) => request<unknown>(config, '/nh/sea', params),
        getSeaCreatureByName: (seaCreature: string, params?: ThumbsizeParams) =>
            request<unknown>(config, `/nh/sea/${encodeURIComponent(seaCreature)}`, params),

        // Events
        getEvents: (params?: EventsParams) => request<unknown[]>(config, '/nh/events', params),

        // Artwork
        getArtwork: (params?: ArtworkParams) => request<unknown[]>(config, '/nh/art', params),
        getArtworkByName: (artwork: string, params?: ThumbsizeParams) =>
            request<unknown>(config, `/nh/art/${encodeURIComponent(artwork)}`, params),

        // Furniture
        getFurniture: (params?: FurnitureParams) => request<unknown[]>(config, '/nh/furniture', params),
        getFurnitureByName: (furniture: string, params?: ThumbsizeParams) =>
            request<unknown>(config, `/nh/furniture/${encodeURIComponent(furniture)}`, params),

        // Clothing
        getClothing: (params?: ClothingParams) => request<unknown[]>(config, '/nh/clothing', params),
        getClothingByName: (clothing: string, params?: ThumbsizeParams) =>
            request<unknown>(config, `/nh/clothing/${encodeURIComponent(clothing)}`, params),

        // Interior
        getInterior: (params?: InteriorParams) => request<unknown[]>(config, '/nh/interior', params),
        getInteriorByName: (item: string, params?: ItemDetailsParams) =>
            request<unknown>(config, `/nh/interior/${encodeURIComponent(item)}`, params),

        // Tools
        getTools: (params?: Pick<MonthFilterParams, 'excludedetails'>) =>
            request<unknown[]>(config, '/nh/tools', params),
        getToolByName: (tool: string, params?: ThumbsizeParams) =>
            request<unknown>(config, `/nh/tools/${encodeURIComponent(tool)}`, params),

        // Photos and posters
        getPhotos: (params?: Pick<MonthFilterParams, 'excludedetails'>) =>
            request<unknown[]>(config, '/nh/photos', params),
        getPhotoByName: (item: string, params?: ThumbsizeParams) =>
            request<unknown>(config, `/nh/photos/${encodeURIComponent(item)}`, params),

        // Misc items
        getItems: (params?: Pick<MonthFilterParams, 'excludedetails'>) =>
            request<unknown[]>(config, '/nh/items', params),
        getItemByName: (item: string, params?: ThumbsizeParams) =>
            request<unknown>(config, `/nh/items/${encodeURIComponent(item)}`, params),

        // Recipes
        getRecipes: (params?: RecipesParams) => request<unknown[]>(config, '/nh/recipes', params),
        getRecipeByName: (item: string, params?: ThumbsizeParams) =>
            request<unknown>(config, `/nh/recipes/${encodeURIComponent(item)}`, params),

        // Fossils
        getIndividualFossils: (params?: ThumbsizeParams) =>
            request<unknown[]>(config, '/nh/fossils/individuals', params),
        getIndividualFossilByName: (fossil: string, params?: ThumbsizeParams) =>
            request<unknown>(config, `/nh/fossils/individuals/${encodeURIComponent(fossil)}`, params),
        getFossilGroups: (params?: ThumbsizeParams) =>
            request<unknown[]>(config, '/nh/fossils/groups', params),
        getFossilGroupByName: (fossilGroup: string, params?: ThumbsizeParams) =>
            request<unknown>(config, `/nh/fossils/groups/${encodeURIComponent(fossilGroup)}`, params),
        getAllFossils: (params?: ThumbsizeParams) => request<unknown[]>(config, '/nh/fossils/all', params),
        getFossilByName: (fossil: string, params?: ThumbsizeParams) =>
            request<unknown>(config, `/nh/fossils/all/${encodeURIComponent(fossil)}`, params),

        // Gyroids
        getGyroids: (params?: GyroidsParams) => request<unknown[]>(config, '/nh/gyroids', params),
        getGyroidByName: (gyroid: string, params?: ThumbsizeParams) =>
            request<unknown>(config, `/nh/gyroids/${encodeURIComponent(gyroid)}`, params),
    };
}