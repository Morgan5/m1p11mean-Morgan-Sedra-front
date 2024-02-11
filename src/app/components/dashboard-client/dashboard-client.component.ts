import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';

@Component({
  selector: 'app-dashboard-client',
  templateUrl: './dashboard-client.component.html',
  styleUrls: ['./dashboard-client.component.scss']
})
export class DashboardClientComponent implements OnInit {

  constructor(private router: Router) {}
 
  ngOnInit(): void {
    function refreshPageOnce() {
      if (!sessionStorage.getItem('pageRefreshed')) {
        sessionStorage.setItem('pageRefreshed', 'true');
        location.reload();
      }
    }
    refreshPageOnce();
    
    const token = sessionStorage.getItem('token');
    if(token){
      const decodedToken = jwtDecode(token);
      //console.log(decodedToken);
    }
  }

}