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
