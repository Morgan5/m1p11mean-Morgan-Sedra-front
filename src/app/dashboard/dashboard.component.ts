import { Component, OnInit } from '@angular/core';
import { jwtDecode } from 'jwt-decode';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }

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
