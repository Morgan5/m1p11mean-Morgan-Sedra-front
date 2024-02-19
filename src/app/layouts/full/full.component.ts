import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { jwtDecode } from 'jwt-decode';
import { Router } from '@angular/router';


interface sidebarMenu {
  link: string;
  icon: string;
  menu: string;
}

interface user {
  firstName: string;
  lastName: string;
  token: string;
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

  constructor(private breakpointObserver: BreakpointObserver, private router: Router) {
    const token = sessionStorage.getItem('token');
    if (token) {
      const decodedToken: any = jwtDecode(token);
      if (decodedToken) {
        console.log(decodedToken);
        if (decodedToken.role == 'Client') {
          this.addClientMenu();
          this.setUser(decodedToken.firstName, decodedToken.lastName, token);
        }
        if (decodedToken.role == 'Employee') {
          //this.addEmployeeMenu(); 
          this.setUser(decodedToken.firstName, decodedToken.lastName, token);
        }
        if (decodedToken.role == 'Manager') {
          this.addManagerMenu();
          // this.addManagerMenu();
          this.setUserManager(decodedToken.name, token);
        }
      }

    }

  }

  routerActive: string = "activelink";

  sidebarMenu: sidebarMenu[] = [];
  user: user = { firstName: '', lastName: '', token: '' };

  setUser(firstName: string, lastName: string, token: string): void {
    this.user.firstName = firstName;
    this.user.lastName = lastName;
    this.user.token = token;
  }

  setUserManager(firstName: string, token: string): void {
    this.user.firstName = firstName;
    this.user.token = token;
  }

  logOut(): void {
    sessionStorage.clear();
    this.router.navigateByUrl('/home');
  }

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
        menu: "Rendez-vous",
      },
      {
        link: "/preference-management-client",
        icon: "list",
        menu: "Préférences",
      }
    );
  }

  // ito le anlah taloha iny, atsoina fotsiny ao am le constructeur
  addManagerMenu(): void {
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
        link: "/clients",
        icon: "sliders",
        menu: "Clients",
      },
      // {
      //   link: "/tasks",
      //   icon: "list",
      //   menu: "Tasks",
      // },
    );
  }



}