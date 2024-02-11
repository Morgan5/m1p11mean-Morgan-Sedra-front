import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { jwtDecode } from 'jwt-decode';

interface sidebarMenu {
  link: string;
  icon: string;
  menu: string;
}

@Component({
  selector: 'app-full',
  templateUrl: './full.component.html',
  styleUrls: ['./full.component.scss']
})
export class FullComponent {

  search: boolean = false;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) { 
    const token = sessionStorage.getItem('token');
    if(token){
      const decodedToken: any = jwtDecode(token);
      if(decodedToken){
        console.log(decodedToken);
        if(decodedToken.role == 'Client'){
          this.addClientMenu(); 
        }
        if(decodedToken.role == 'Employee'){
          //this.addEmployeeMenu(); 
        }
        if(decodedToken.role == 'Manager'){
          // this.addManagerMenu();
        }
      }
      
    }

  }

  routerActive: string = "activelink";

  sidebarMenu: sidebarMenu[] = [];

  addClientMenu(): void {
    this.sidebarMenu.push(
      {
        link: "/dashboard-client",
        icon: "home",
        menu: "Accueil",
      },
      {
        link: "/appointment-setup-client",
        icon: "list",
        menu: "Prise de rendez-vous",
      },
      {
        link: "/appointment-history-client",
        icon: "list",
        menu: "Historique des rendez-vous",
      },
      {
        link: "/preference-management-client",
        icon: "list",
        menu: "Gestion des préférences",
      }
    );
  }

  // ito le anlah taloha iny, atsoina fotsiny ao am le constructeur
  /*oldMenu(): void {
    this.sidebarMenu.push(
      {
        link: "/home",
        icon: "home",
        menu: "Dashboard",
      },
      {
        link: "/reservations",
        icon: "home",
        menu: "Reservations",
      },
      {
        link: "/services",
        icon: "sliders",
        menu: "Services",
      },
      {
        link: "/employers",
        icon: "sliders",
        menu: "Employer",
      },
      {
        link: "/tasks",
        icon: "list",
        menu: "Tasks",
      },
    );
  }*/
  

}
// {
//   link: "/button",
//   icon: "disc",
//   menu: "Buttons",
// },
// {
//   link: "/forms",
//   icon: "layout",
//   menu: "Forms",
// },
// {
//   link: "/alerts",
//   icon: "info",
//   menu: "Alerts",
// },
// {
//   link: "/grid-list",
//   icon: "file-text",
//   menu: "Grid List",
// },
// {
//   link: "/menu",
//   icon: "menu",
//   menu: "Menus",
// },
// {
//   link: "/table",
//   icon: "grid",
//   menu: "Tables",
// },
// {
//   link: "/expansion",
//   icon: "divide-circle",
//   menu: "Expansion Panel",
// },
// {
//   link: "/chips",
//   icon: "award",
//   menu: "Chips",
// },
// {
//   link: "/tabs",
//   icon: "list",
//   menu: "Tabs",
// },
// {
//   link: "/progress",
//   icon: "bar-chart-2",
//   menu: "Progress Bar",
// },
// {
//   link: "/toolbar",
//   icon: "voicemail",
//   menu: "Toolbar",
// },
// {
//   link: "/progress-snipper",
//   icon: "loader",
//   menu: "Progress Snipper",
// },
// {
//   link: "/tooltip",
//   icon: "bell",
//   menu: "Tooltip",
// },
// {
//   link: "/snackbar",
//   icon: "slack",
//   menu: "Snackbar",
// },
// {
//   link: "/slider",
//   icon: "sliders",
//   menu: "Slider",
// },
// {
//   link: "/slide-toggle",
//   icon: "layers",
//   menu: "Slide Toggle",
// },
