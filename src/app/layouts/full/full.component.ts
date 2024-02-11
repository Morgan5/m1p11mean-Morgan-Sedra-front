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