/**
 * Clothing API (New Horizons)
 *
 * Endpoints del YAML:
 * - GET /nh/clothing
 * - GET /nh/clothing/{clothing}
 *
 * Filtros principales:
 * category, color[], style[], labeltheme, excludedetails, thumbsize.
 */
import {
    createNookipediaClient,
    type ClothingParams,
    type NookipediaClientConfig,
    type ThumbsizeParams,
} from './nookpedia_API';

export function createNookipediaClothingApi(config: NookipediaClientConfig) {
    const client = createNookipediaClient(config);

    return {
        getClothing: (params?: ClothingParams) => client.getClothing(params),
        getClothingByName: (clothing: string, params?: ThumbsizeParams) =>
            client.getClothingByName(clothing, params),
    };
}
