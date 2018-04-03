import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ContentRoutes } from './content.routing';
import { AppModule } from '../app.module';
import { SharedModule } from '../shared';
import { HomepageComponent } from './homepage/homepage.component';
import { TimingComponent } from './booking/timing/timing.component';
import { SeatingComponent } from './booking/seating/seating.component';
import { PaymentComponent } from './booking/payment/payment.component';
import { MoviesListComponent } from './movies/movies-list/movies-list.component';
import { SearchComponent } from './search/search.component';
import { AboutusComponent } from './aboutus/aboutus.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(ContentRoutes)
  ],
  declarations: [HomepageComponent, TimingComponent, SeatingComponent, PaymentComponent, MoviesListComponent, SearchComponent, AboutusComponent]
})

export class ContentModule { }
