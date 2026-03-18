/**
 * Misc Items API (New Horizons)
 *
 * Endpoints del YAML:
 * - GET /nh/items
 * - GET /nh/items/{item}
 *
 * Filtros principales:
 * excludedetails, thumbsize.
 */
import {
    createNookipediaClient,
    type NookipediaClientConfig,
    type ThumbsizeParams,
} from './nookpedia_API';

export function createNookipediaItemsApi(config: NookipediaClientConfig) {
    const client = createNookipediaClient(config);

    return {
        getItems: (excludedetails?: boolean) => client.getItems({ excludedetails }),
        getItemByName: (item: string, params?: ThumbsizeParams) => client.getItemByName(item, params),
    };
}