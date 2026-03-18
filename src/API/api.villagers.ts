/**
 * Villagers API
 *
 * Endpoints del YAML:
 * - GET /villagers
 *
 * Filtros soportados:
 * name, species, personality, game[], birthmonth, birthday, nhdetails,
 * excludedetails, thumbsize.
 */
import {
    createNookipediaClient,
    type NookipediaClientConfig,
    type VillagersParams,
} from './nookpedia_API';

export function createNookipediaVillagersApi(config: NookipediaClientConfig) {
    const client = createNookipediaClient(config);

    return {
        getVillagers: (params?: VillagersParams) => client.getVillagers(params),
    };
}
