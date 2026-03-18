import {
    createNookipediaClient,
    type NookipediaClientConfig,
    type ThumbsizeParams,
} from './nookpedia_API';

export function createNookipediaPhotosApi(config: NookipediaClientConfig) {
    const client = createNookipediaClient(config);

    return {
        getPhotos: (excludedetails?: boolean) => client.getPhotos({ excludedetails }),
        getPhotoByName: (item: string, params?: ThumbsizeParams) => client.getPhotoByName(item, params),
    };
}
