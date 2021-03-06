import { Injectable } from '@angular/core';
import { CookieService } from 'angular2-cookie/core';

export interface BadgeItem {
  type: string;
  value: string;
}

export interface ChildrenItems {
  state: string;
  name: string;
  type?: string;
}

export interface Menu {
  state: string;
  name: string;
  type: string;
  icon: string;
  badge?: BadgeItem[];
  children?: ChildrenItems[];
}

// const MENUITEMS =
//   [{
//     state: '/',
//     name: 'HOME',
//     type: 'link',
//     icon: 'basic-accelerator'
//   },
//   {
//     state: 'adminBooking',
//     name: 'Tickets',
//     type: 'sub',
//     icon: 'ecommerce-ticket',
//     children: [
//       {
//         state: 'makeReservation',
//         name: 'MakeReservation'
//       },
//       {
//         state: 'verifyTicket',
//         name: 'Verify or Cancel'
//       }
//     ]
//   },
 
  
 
// ];



@Injectable()
export class MenuItems {

  constructor(public cookie: CookieService) {
    //
  }

  getAll(): Menu[] {

    var MENUITEMS = [{
      state: '/',
      name: 'HOME',
      type: 'link',
      icon: 'basic-accelerator'
    },
    {
      state: 'adminBooking',
      name: 'Tickets',
      type: 'sub',
      icon: 'ecommerce-ticket',
      children: [
        {
          state: 'makeReservation',
          name: 'MakeReservation'
        },
        {
          state: 'verifyTicket',
          name: 'Verify or Cancel'
        }
      ]
    },
   
    
   
  ];

    let type = this.cookie.getObject('auth')['type'];

    //APP OWNER SIDEBAR ITEMS
    if(type=='App Owner') {
      MENUITEMS.push({
        state: 'promocodes',
        name: 'promocodes',
        type: 'link',
        icon: 'ecommerce-gift'
      },
      {
        state: 'movies',
        name: 'My Movies',
        type: 'sub',
        icon: 'basic-photo',
        children: [
          {
            state: 'requests-ao',
            name: 'Requests'
          },
          {
            state: 'view-movies',
            name: 'View Movies'
          }    
        ] 
      },
      {
        state: 'admins',
        name: 'Admins',
        type: 'sub',
        icon: 'basic-star',
        children: [
          {
            state: 'cinemaowner',
            name: 'Cinema owners'
          },
          {
            state: 'branchmanager',
            name: 'Branch managers'
          },
          {
            state: 'bookingusher',
            name: 'Booking Ushers'
          }
        ]
      },{
        state: 'mycinemas',
        name: 'My Cinemas',
        type: 'link',
        icon: 'basic-webpage-multiple'
      },{
        state: 'halls',
        name: 'halls',
        type: 'link',
        icon: 'ecommerce-gift'
      },{
        state: 'hall',
        name: 'Halls',
        type: 'sub',
        icon: 'basic-star',
        children: [
          {
            state: 'all',
            name: 'All Halls'
          },{
            state: 'layouts',
            name: 'All Layouts'
          }
        ]
      })
    }

     //Cinema Owner

     if(type=='Cinema Owner') {
      MENUITEMS.push(
      {
        state: 'movies',
        name: 'My Movies',
        type: 'sub',
        icon: 'basic-photo',
        children: [
          {
            state: 'requests-co-bm',
            name: 'Requests'
          }
         ]
      },{
        state: 'mycinemas',
        name: 'My Cinemas',
        type: 'link',
        icon: 'basic-webpage-multiple'
      },
      {
        state: 'admins',
        name: 'Admins',
        type: 'sub',
        icon: 'basic-star',
        children: [
          {
            state: 'branchmanager',
            name: 'Branch managers'
          },
          {
            state: 'bookingusher',
            name: 'Booking Ushers'
          }
        ]
      },{
        state: 'halls',
        name: 'halls',
        type: 'link',
        icon: 'ecommerce-gift'
      },{
        state: 'hall',
        name: 'Halls',
        type: 'sub',
        icon: 'basic-star',
        children: [
          {
            state: 'all',
            name: 'All Halls'
          },{
            state: 'layouts',
            name: 'All Layouts'
          }
        ]
      })
    }



     //Branch Manager
     if(type=='Branch Manager') {
      MENUITEMS.push(
      {
        state: 'movies',
        name: 'My Movies',
        type: 'sub',
        icon: 'basic-photo',
        children: [
          {
            state: 'requests-co-bm',
            name: 'Requests'
          }
         ]
      },
      {
        state: 'admins',
        name: 'Admins',
        type: 'sub',
        icon: 'basic-star',
        children: [
          {
            state: 'bookingusher',
            name: 'Booking Ushers'
          }
        ]
      },{
        state: 'halls',
        name: 'halls',
        type: 'link',
        icon: 'ecommerce-gift'
      },{
        state: 'hall',
        name: 'Halls',
        type: 'sub',
        icon: 'basic-star',
        children: [
          {
            state: 'all',
            name: 'All Halls'
          },{
            state: 'layouts',
            name: 'All Layouts'
          }
        ]
      })
    }

    return MENUITEMS;
  }

  // add(menu: Menu) {
  //   MENUITEMS.push(menu);
  // }
}
