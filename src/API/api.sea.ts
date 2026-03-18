import {
    createNookipediaClient,
    type MonthFilterParams,
    type NookipediaClientConfig,
    type ThumbsizeParams,
} from './nookpedia_API';

export function createNookipediaSeaApi(config: NookipediaClientConfig) {
    const client = createNookipediaClient(config);

    return {
        getSeaCreatures: (params?: MonthFilterParams) => client.getSeaCreatures(params),
        getSeaCreatureByName: (seaCreature: string, params?: ThumbsizeParams) =>
            client.getSeaCreatureByName(seaCreature, params),
    };
}
