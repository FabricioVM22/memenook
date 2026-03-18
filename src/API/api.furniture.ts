/**
 * Furniture API (New Horizons)
 *
 * Endpoints del YAML:
 * - GET /nh/furniture
 * - GET /nh/furniture/{furniture}
 *
 * Filtros principales:
 * category, color[], excludedetails, thumbsize.
 */
import {
    createNookipediaClient,
    type FurnitureParams,
    type NookipediaClientConfig,
    type ThumbsizeParams,
} from './nookpedia_API';

export function createNookipediaFurnitureApi(config: NookipediaClientConfig) {
    const client = createNookipediaClient(config);

    return {
        getFurniture: (params?: FurnitureParams) => client.getFurniture(params),
        getFurnitureByName: (furniture: string, params?: ThumbsizeParams) =>
            client.getFurnitureByName(furniture, params),
    };
}
