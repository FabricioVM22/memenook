/**
 * Bugs API (New Horizons)
 *
 * Endpoints del YAML:
 * - GET /nh/bugs
 * - GET /nh/bugs/{bug}
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

export function createNookipediaBugsApi(config: NookipediaClientConfig) {
    const client = createNookipediaClient(config);

    return {
        getBugs: (params?: MonthFilterParams) => client.getBugs(params),
        getBugByName: (bug: string, params?: ThumbsizeParams) => client.getBugByName(bug, params),
    };
}
