import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SidebarModule } from 'ng-sidebar';
import { AgmCoreModule } from '@agm/core';

import { AppRoutes } from './app.routing';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth/auth-layout.component';
import { SharedModule } from './shared/shared.module';
import { AuthGuard } from './@guards/auth.guard';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { HttpService } from './@services/http.service';
import { AuthService } from './@services/auth.service';
import { CinemaslistService } from './@services/cinemaslist.service';
import { SearchService } from './@services/search.service';
import { HttpModule } from '@angular/http';
import { AdminHallsComponent } from './admin-halls/admin-halls.component';
import { HallsService } from './@services/halls.service';
import { AdminService } from './@services/adminService.service';
import { HallService } from './@services/hall.service';
import { AdminTicketService } from "./@services/admin-ticket.service";
import { MoviesInHallsService } from "./@services/movies-in-halls.service";
import { MoviesInHallsComponent } from './movies-in-halls/movies-in-halls.component';
import { AdminBookingModule} from "./admin-booking/admin-booking.module";
import { ViewPromocodesComponent } from './promocodes/view-promocodes/view-promocodes.component';
import { PromocodesService } from './@services/promocodes.service';
import { MoviesService } from './@services/movies.service';
import { ModalHall } from './hall/modals/hall.component';
import { ModalAdmin } from './admins/modals/admin.component';
import { ModalCinema } from './mycinemas/modals/cinema.component';
import { ModalPromocodes } from './promocodes/modals/promocodes.component';

import { NgxPaginationModule } from 'ngx-pagination';
import { Cinema } from './@objects/cinema';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    AdminHallsComponent,
    MoviesInHallsComponent,
    ModalHall,
    ModalAdmin,
    ModalCinema,
    ModalPromocodes
  ],
  imports: [
    NgxPaginationModule,
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    HttpModule,
    RouterModule.forRoot(AppRoutes),
    FormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    NgbModule.forRoot(),
    SidebarModule.forRoot(),
    AgmCoreModule.forRoot({apiKey: 'YOURAPIKEY'})
  ],
  providers: [AuthGuard, CookieService, HttpService, AuthService, AdminTicketService, MoviesInHallsService,
  CinemaslistService, SearchService, PromocodesService, HallService,MoviesService, HallsService ,AdminService,Cinema],
  bootstrap: [AppComponent],
  entryComponents: [ModalHall, ModalAdmin, ModalCinema, ModalPromocodes]
})
export class AppModule { }
