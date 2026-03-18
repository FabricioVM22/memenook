/**
 * Interior API (New Horizons)
 *
 * Endpoints del YAML:
 * - GET /nh/interior
 * - GET /nh/interior/{item}
 *
 * Filtros principales:
 * category, color[], excludedetails, thumbsize.
 */
import {
    createNookipediaClient,
    type InteriorParams,
    type ItemDetailsParams,
    type NookipediaClientConfig,
} from './nookpedia_API';

export function createNookipediaInteriorApi(config: NookipediaClientConfig) {
    const client = createNookipediaClient(config);

    return {
        getInterior: (params?: InteriorParams) => client.getInterior(params),
        getInteriorByName: (item: string, params?: ItemDetailsParams) =>
            client.getInteriorByName(item, params),
    };
}
