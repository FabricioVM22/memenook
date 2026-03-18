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
