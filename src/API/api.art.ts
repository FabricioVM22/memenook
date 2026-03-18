import {
    createNookipediaClient,
    type ArtworkParams,
    type NookipediaClientConfig,
    type ThumbsizeParams,
} from './nookpedia_API';

export function createNookipediaArtApi(config: NookipediaClientConfig) {
    const client = createNookipediaClient(config);

    return {
        getArtwork: (params?: ArtworkParams) => client.getArtwork(params),
        getArtworkByName: (artwork: string, params?: ThumbsizeParams) =>
            client.getArtworkByName(artwork, params),
    };
}
