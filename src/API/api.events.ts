/**
 * Events API (New Horizons)
 *
 * Endpoint del YAML:
 * - GET /nh/events
 *
 * Filtros principales:
 * date, year, month, day.
 */
import {
    createNookipediaClient,
    type EventsParams,
    type NookipediaClientConfig,
} from './nookpedia_API';

export function createNookipediaEventsApi(config: NookipediaClientConfig) {
    const client = createNookipediaClient(config);

    return {
        getEvents: (params?: EventsParams) => client.getEvents(params),
    };
}
