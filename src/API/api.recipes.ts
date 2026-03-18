/**
 * Recipes API (New Horizons)
 *
 * Endpoints del YAML:
 * - GET /nh/recipes
 * - GET /nh/recipes/{item}
 *
 * Filtros principales:
 * material[], excludedetails, thumbsize.
 */
import {
    createNookipediaClient,
    type NookipediaClientConfig,
    type RecipesParams,
    type ThumbsizeParams,
} from './nookpedia_API';

export function createNookipediaRecipesApi(config: NookipediaClientConfig) {
    const client = createNookipediaClient(config);

    return {
        getRecipes: (params?: RecipesParams) => client.getRecipes(params),
        getRecipeByName: (item: string, params?: ThumbsizeParams) =>
            client.getRecipeByName(item, params),
    };
}
