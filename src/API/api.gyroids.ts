/**
 * Gyroids API (New Horizons)
 *
 * Endpoints del YAML:
 * - GET /nh/gyroids
 * - GET /nh/gyroids/{gyroid}
 *
 * Filtros principales:
 * sound, excludedetails, thumbsize.
 */
import {
    createNookipediaClient,
    type GyroidsParams,
    type NookipediaClientConfig,
    type ThumbsizeParams,
} from './nookpedia_API';

export function createNookipediaGyroidsApi(config: NookipediaClientConfig) {
    const client = createNookipediaClient(config);

    return {
        getGyroids: (params?: GyroidsParams) => client.getGyroids(params),
        getGyroidByName: (gyroid: string, params?: ThumbsizeParams) =>
            client.getGyroidByName(gyroid, params),
    };
}
