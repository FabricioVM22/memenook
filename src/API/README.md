# Nookipedia API Modules

Esta carpeta contiene una capa de acceso al API de Nookipedia (OpenAPI v1.7.0), separada por categorias.

## Configuracion Basica

Todos los endpoints requieren headers:

- `X-API-KEY` (UUID valido)
- `Accept-Version` (ej. `1.7.0`)

El cliente base se crea con:

```ts
import { createNookipediaClient } from './index';

const client = createNookipediaClient({
  apiKey: 'TU_API_KEY',
  apiVersion: '1.7.0',
});
```

## Modulos Por Categoria

- `api.villagers.ts`: `/villagers`
- `api.fish.ts`: `/nh/fish`, `/nh/fish/{fish}`
- `api.bugs.ts`: `/nh/bugs`, `/nh/bugs/{bug}`
- `api.sea.ts`: `/nh/sea`, `/nh/sea/{sea_creature}`
- `api.events.ts`: `/nh/events`
- `api.art.ts`: `/nh/art`, `/nh/art/{artwork}`
- `api.furniture.ts`: `/nh/furniture`, `/nh/furniture/{furniture}`
- `api.clothing.ts`: `/nh/clothing`, `/nh/clothing/{clothing}`
- `api.interior.ts`: `/nh/interior`, `/nh/interior/{item}`
- `api.tools.ts`: `/nh/tools`, `/nh/tools/{tool}`
- `api.photos.ts`: `/nh/photos`, `/nh/photos/{item}`
- `api.items.ts`: `/nh/items`, `/nh/items/{item}`
- `api.recipes.ts`: `/nh/recipes`, `/nh/recipes/{item}`
- `api.fossils.ts`: rutas de fossils individuals/groups/all
- `api.gyroids.ts`: `/nh/gyroids`, `/nh/gyroids/{gyroid}`

## Ejemplos Rapidos

### Villagers

```ts
import { createNookipediaVillagersApi } from './index';

const villagersApi = createNookipediaVillagersApi({ apiKey: 'TU_API_KEY' });
const frogs = await villagersApi.getVillagers({ species: 'frog', personality: 'smug' });
```

### Fish Del Mes Actual

```ts
import { createNookipediaFishApi } from './index';

const fishApi = createNookipediaFishApi({ apiKey: 'TU_API_KEY' });
const currentMonthFish = await fishApi.getFish({ month: 'current', excludedetails: true });
```

### Recipes Por Material

```ts
import { createNookipediaRecipesApi } from './index';

const recipesApi = createNookipediaRecipesApi({ apiKey: 'TU_API_KEY' });
const woodRecipes = await recipesApi.getRecipes({ material: ['Wood'] });
```

## Angular

Si estas en Angular, usa el servicio unificado en:

- `src/app/services/nookipedia.service.ts`

y el provider en:

- `src/app/services/nookipedia.tokens.ts`
