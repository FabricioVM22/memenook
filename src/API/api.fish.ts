/**
 * Fish API (New Horizons)
 *
 * Endpoints del YAML:
 * - GET /nh/fish
 * - GET /nh/fish/{fish}
 *
 * Filtros principales:
 * month, excludedetails, thumbsize.
 */
import {
    createNookipediaClient,
    type MonthFilterParams,
    type NookipediaClientConfig,
    type ThumbsizeParams,
} from './nookpedia_API';

export function createNookipediaFishApi(config: NookipediaClientConfig) {
    const client = createNookipediaClient(config);

    return {
        getFish: (params?: MonthFilterParams) => client.getFish(params),
        getFishByName: (fish: string, params?: ThumbsizeParams) => client.getFishByName(fish, params),
    };
}
