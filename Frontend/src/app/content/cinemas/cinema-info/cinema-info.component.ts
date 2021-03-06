import { Component, OnInit } from '@angular/core';
import { CinemaInfoService } from '../../../@services/cinema-info.service';
import { Router, ActivatedRoute, Params } from '@angular/router'
import { CinemaslistService } from '../../../@services/cinemaslist.service'
import { CinemasListComponent } from '../cinemas-list/cinemas-list.component'
import { CookieService } from 'angular2-cookie/core';

@Component({
  selector: 'app-cinema-info',
  templateUrl: './cinema-info.component.html',
  styleUrls: ['./cinema-info.component.css']
})
export class CinemaInfoComponent implements OnInit {
  cinema;
  name;
  location;
  moviesInCinema;
  chooseDate;



  constructor(public cinemaSerive: CinemaInfoService,
    public router: Router,
    public route: ActivatedRoute,
    public cookie: CookieService) {

    this.route.params.subscribe((params: Params) => {
      this.name = params['name'];
      this.location = params['location'];
    });

  }

  ngOnInit() {
    var data = {
      cinema: this.name,
      location: this.location,

    }

    this.cinemaSerive.getCinemaInfo(data.cinema, data.location).subscribe((response) => {
      this.cinema = response.data[0];
    });

    this.cinemaSerive.getMoviesInCinema(data.cinema, data.location).subscribe((response) => {
      this.moviesInCinema = response.data;
      console.log(this.moviesInCinema);
    });

  }

  GoToReservation(movie) {
    this.cookie.putObject('movie', movie);
    console.log(this.cinema);
  }

  filterBy(sorting_item, searchValue) {
    if (sorting_item != undefined && searchValue != undefined) this.router.navigate(['cinemas/list', sorting_item, searchValue]);
    else this.router.navigate(['cinemas/list']);
  }

}
