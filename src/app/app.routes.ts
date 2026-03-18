import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: '',
		redirectTo: 'principal',
		pathMatch: 'full'
	},
	{
		path: 'villagers',
		loadComponent: () =>
			import('./Components/villagers/villagers').then((m) => m.Villagers),
    },
    {
		path: 'fish',
		loadComponent: () =>
            import('./Components/fish/fish').then((m) => m.Fish),
    },
    {
		path: 'items',
		loadComponent: () =>
			import('./Components/items/items').then((m) => m.Items),
    },
    {
        path: 'principal',
        loadComponent: () =>
            import('./Components/principal/principal').then((m) => m.Principal),
    }
];
