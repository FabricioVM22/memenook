/**
 * Tools API (New Horizons)
 *
 * Endpoints del YAML:
 * - GET /nh/tools
 * - GET /nh/tools/{tool}
 *
 * Filtros principales:
 * excludedetails, thumbsize.
 */
import {
    createNookipediaClient,
    type NookipediaClientConfig,
    type ThumbsizeParams,
} from './nookpedia_API';

export function createNookipediaToolsApi(config: NookipediaClientConfig) {
    const client = createNookipediaClient(config);

    return {
        getTools: (excludedetails?: boolean) => client.getTools({ excludedetails }),
        getToolByName: (tool: string, params?: ThumbsizeParams) => client.getToolByName(tool, params),
    };
}
