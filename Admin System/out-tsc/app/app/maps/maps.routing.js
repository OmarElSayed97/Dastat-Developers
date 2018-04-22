import { GoogleComponent } from './google/google.component';
import { FullscreenComponent } from './fullscreen/fullscreen.component';
export var MapsRoutes = [
    {
        path: '',
        children: [{
                path: 'google',
                component: GoogleComponent,
                data: {
                    heading: 'Google Maps'
                }
            }, {
                path: 'fullscreen',
                component: FullscreenComponent,
                data: {
                    heading: 'Full Page Map',
                    removeFooter: true,
                    mapHeader: true
                }
            }]
    }
];
//# sourceMappingURL=maps.routing.js.map