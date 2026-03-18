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
