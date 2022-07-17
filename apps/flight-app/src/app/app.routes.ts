import { Routes } from '@angular/router';
import { BasketComponent } from './basket/basket.component';
import { HomeComponent } from './home/home.component';
import { loadRemoteModule } from '@angular-architects/module-federation';
import { WebComponentWrapper, WebComponentWrapperOptions, startsWith } from '@angular-architects/module-federation-tools';

export const APP_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'passenger-mf',
    loadChildren: () => 
      // import('passenger/Module')
      loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:4200/remoteEntry.js',
        exposedModule: './Module'
      }).then(m => m.PassengerModule)
  },
  {
    matcher: startsWith('angular2'),
    component: WebComponentWrapper,
    data: {
        remoteEntry: 'https://gray-pond-030798810.azurestaticapps.net/remoteEntry.js',
        remoteName: 'angular2',
        exposedModule: './web-components',
        elementName: 'angular2-element'
    } as WebComponentWrapperOptions
},

// And this route too:
{
    path: 'react',
    component: WebComponentWrapper,
    data: {
        remoteEntry: 'https://witty-wave-0a695f710.azurestaticapps.net/remoteEntry.js',
        remoteName: 'react',
        exposedModule: './web-components',
        elementName: 'react-element'
    } as WebComponentWrapperOptions
},
  {
    path: 'basket',
    component: BasketComponent,
    outlet: 'aux'
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];
