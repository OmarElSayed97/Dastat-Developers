import { Routes } from '@angular/router';
import { AdminLayoutComponent } from './layouts/admin/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth/auth-layout.component';
import { AuthGuard } from './@guards/auth.guard';
import { AdminHallsComponent } from './admin-halls/admin-halls.component';
import { MoviesInHallsComponent } from './movies-in-halls/movies-in-halls.component';

export const AppRoutes: Routes = [{
  path: '',
  component: AdminLayoutComponent,
  canActivate: [AuthGuard],
  children: [{
    path: '',
    loadChildren: './dashboard/dashboard.module#DashboardModule'
  },{
    path: 'halls',
    component: AdminHallsComponent
  },{
    path: 'admins',
    loadChildren: './admins/admins.module#AdminsModule'
  },{
    path: 'email',
    loadChildren: './email/email.module#EmailModule'
  },{
    path: 'MoviesInHalls',
    component: MoviesInHallsComponent
  }, {
    path: 'components',
    loadChildren: './components/components.module#ComponentsModule'
  }, {
    path: 'icons',
    loadChildren: './icons/icons.module#IconsModule'
  }, {
    path: 'cards',
    loadChildren: './cards/cards.module#CardsModule'
  }, {
    path: 'forms',
    loadChildren: './form/form.module#FormModule'
  }, {
    path: 'tables',
    loadChildren: './tables/tables.module#TablesModule'
  }, {
    path: 'datatable',
    loadChildren: './datatable/datatable.module#DatatableModule'
  }, {
    path: 'charts',
    loadChildren: './charts/charts.module#ChartsModule'
  }, {
    path: 'maps',
    loadChildren: './maps/maps.module#MapsModule'
  }, {
    path: 'pages',
    loadChildren: './pages/pages.module#PagesModule'
  },{
    path: 'mycinemas',
    loadChildren: './mycinemas/mycinemas.module#MycinemasModule'
  },{
    path: 'taskboard',
    loadChildren: './taskboard/taskboard.module#TaskboardModule'
  }, {
    path: 'calendar',
    loadChildren: './fullcalendar/fullcalendar.module#FullcalendarModule'
  }, {
    path: 'media',
    loadChildren: './media/media.module#MediaModule'
  }, {
    path: 'widgets',
    loadChildren: './widgets/widgets.module#WidgetsModule'
  }, {
    path: 'social',
    loadChildren: './social/social.module#SocialModule'
  }, {
    path: 'docs',
    loadChildren: './docs/docs.module#DocsModule'
  }, {
    path: 'hall',
    loadChildren: './hall/hall.module#HallModule'
  },{
    path: 'adminBooking',
    loadChildren: './admin-booking/admin-booking.module#AdminBookingModule'
  }, {
    path: 'promocodes',
    loadChildren: './promocodes/promocodes.module#PromocodesModule'
  },{ 
    path: 'movies',
    loadChildren: './movies/movies.module#MoviesModule'
}]
}, {
  path: '',
  component: AuthLayoutComponent,
  children: [{
    path: 'authentication',
    loadChildren: './authentication/authentication.module#AuthenticationModule'
  }, {
    path: 'error',
    loadChildren: './error/error.module#ErrorModule'
  }, {
    path: 'landing',
    loadChildren: './landing/landing.module#LandingModule'
  }]
}, {
  path: '**',
  redirectTo: 'error/404'
}]

