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
