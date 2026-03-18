/**
 * Fossils API (New Horizons)
 *
 * Endpoints del YAML:
 * - GET /nh/fossils/individuals
 * - GET /nh/fossils/individuals/{fossil}
 * - GET /nh/fossils/groups
 * - GET /nh/fossils/groups/{fossil_group}
 * - GET /nh/fossils/all
 * - GET /nh/fossils/all/{fossil}
 *
 * Filtros principales:
 * thumbsize.
 */
import {
    createNookipediaClient,
    type NookipediaClientConfig,
    type ThumbsizeParams,
} from './nookpedia_API';

export function createNookipediaFossilsApi(config: NookipediaClientConfig) {
    const client = createNookipediaClient(config);

    return {
        getIndividualFossils: (params?: ThumbsizeParams) => client.getIndividualFossils(params),
        getIndividualFossilByName: (fossil: string, params?: ThumbsizeParams) =>
            client.getIndividualFossilByName(fossil, params),
        getFossilGroups: (params?: ThumbsizeParams) => client.getFossilGroups(params),
        getFossilGroupByName: (fossilGroup: string, params?: ThumbsizeParams) =>
            client.getFossilGroupByName(fossilGroup, params),
        getAllFossils: (params?: ThumbsizeParams) => client.getAllFossils(params),
        getFossilByName: (fossil: string, params?: ThumbsizeParams) => client.getFossilByName(fossil, params),
    };
}
