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