import { Component, OnInit, OnDestroy, ViewChild, HostListener, AnimationTransitionEvent, NgZone, AfterViewInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

import { MenuItems } from '../../shared/menu-items/menu-items';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/filter';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from '../../@services/auth.service';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { Auth } from '../../@guards/auth.guard';
import { PromocodesService } from '../../@services/promocodes.service';
import { CinemaslistService } from '../../@services/cinemaslist.service';
import { Location } from '@angular/common';

const SMALL_WIDTH_BREAKPOINT = 991;

export interface Options {
  heading?: string;
  removeFooter?: boolean;
  mapHeader?: boolean;
}

@Component({
  selector: 'app-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent implements OnInit, OnDestroy, AfterViewInit {

  private _router: Subscription;
  private mediaMatcher: MediaQueryList = matchMedia(`(max-width: ${SMALL_WIDTH_BREAKPOINT}px)`);

  currentLang = 'en';
  options: Options;
  theme = 'light';
  showSettings = false;
  isDocked = false;
  isBoxed = false;
  isOpened = true;
  mode = 'push';
  _mode = this.mode;
  _autoCollapseWidth = 991;
  width = window.innerWidth;
  username: string;
  cinemas = [];
  cinemaChoosen;

  menu;

  @ViewChild('sidebar') sidebar;

  constructor (
    public menuItems: MenuItems,
    private router: Router,
    private route: ActivatedRoute,
    public translate: TranslateService,
    private modalService: NgbModal,
    private titleService: Title,
    private zone: NgZone,
    private location: Location,
    private authService: AuthService,
    private cookie: CookieService,
    private cinemalistService: CinemaslistService) {
    const browserLang: string = translate.getBrowserLang();
    translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
    this.mediaMatcher.addListener(mql => zone.run(() => this.mediaMatcher = mql));
  }

  ngOnInit(): void {
    var auth = <Auth>(this.cookie.getObject('auth'));
    this.username = auth.username;

    

    this.cinemalistService.getAllCinemas().subscribe((response) => {
      console.log(response);

      this.cinemas = response.data;

      if(this.cookie.getObject('cinema') == null){
        this.cinemaChoosen = response.data[0];
        this.cinemaChoosen.model = this.cinemaChoosen.name + " , " + this.cinemaChoosen.location;
        this.cookie.putObject('cinema', this.cinemaChoosen);
        console.log('why the fuck');
      } else {
        this.cinemaChoosen = this.cookie.getObject('cinema');
      }

      console.log(this.cinemaChoosen);
    });


    if (this.isOver()) {
      this._mode = 'over';
      this.isOpened = false;
    }

    this._router = this.router.events.filter(event => event instanceof NavigationEnd).subscribe((event: NavigationEnd) => {
      // Scroll to top on view load
      document.querySelector('.main-content').scrollTop = 0;
      this.runOnRouteChange();
    });
  }

  ngAfterViewInit(): void  {
    setTimeout(_ => this.runOnRouteChange());
  }

  ngOnDestroy() {
    this._router.unsubscribe();
  }

  runOnRouteChange(): void {
    this.menu = this.menuItems.getAll();

    if (this.isOver() || this.router.url === '/maps/fullscreen') {
      this.isOpened = false;
    }

    this.route.children.forEach((route: ActivatedRoute) => {
      let activeRoute: ActivatedRoute = route;
      while (activeRoute.firstChild) {
        activeRoute = activeRoute.firstChild;
      }
      this.options = activeRoute.snapshot.data;
    });

    if (this.options) {
      if (this.options.hasOwnProperty('heading')) {
        this.setTitle(this.options.heading);
      }
    }
  }

  setTitle( newTitle: string) {
    this.titleService.setTitle( 'Cinema App Admin System | ' + newTitle );
  }

  toogleSidebar(): void {
    this.isOpened = !this.isOpened;
  }

  isOver(): boolean {
    return window.matchMedia(`(max-width: 991px)`).matches;
  }

  openSearch(search) {
    this.modalService.open(search, { windowClass: 'search', backdrop: false });
  }

  logout() {
    var auth: Auth = {
      token: undefined,
      username: undefined
    };

    this.cookie.putObject('auth', auth);
    this.router.navigate(['/authentication/signin']);

  }

  getChosenCinema(ok) {
    this.cookie.putObject('cinema', this.cinemaChoosen);
    console.log(this.cookie.getObject('cinema'));
    location.reload();
  }

}
