/**
 * Artwork API (New Horizons)
 *
 * Endpoints del YAML:
 * - GET /nh/art
 * - GET /nh/art/{artwork}
 *
 * Filtros principales:
 * hasfake, excludedetails, thumbsize.
 */
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
