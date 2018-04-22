import { BarComponent } from './bar/bar.component';
import { PieComponent } from './pie/pie.component';
import { LineComponent } from './line/line.component';
import { MiscComponent } from './misc/misc.component';
export var ChartsRoutes = [{
        path: '',
        children: [{
                path: 'bar',
                component: BarComponent,
                data: {
                    heading: 'Bar'
                }
            }, {
                path: 'pie',
                component: PieComponent,
                data: {
                    heading: 'Pie'
                }
            }, {
                path: 'line',
                component: LineComponent,
                data: {
                    heading: 'Line'
                }
            }, {
                path: 'misc',
                component: MiscComponent,
                data: {
                    heading: 'Misc'
                }
            }]
    }];
//# sourceMappingURL=charts.routing.js.map