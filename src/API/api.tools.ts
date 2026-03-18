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
