import { CommonModule, NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { DemoFlexyModule } from 'src/app/demo-flexy-module';

interface cards {
  image: string;
  btn: string;
}

@Component({
  selector: 'app-services',
  standalone: true,
  templateUrl: './services.component.html',
  imports: [DemoFlexyModule,CommonModule,NgClass],
  styleUrls: ['./services.component.scss']
})

export class ServicesComponent  {

  isVisibleFrom:boolean = false;

  openNewService(){
    this.isVisibleFrom = true;
  }

  closeNewService(){
    this.isVisibleFrom = false;
  }

  cards: cards [] = [
    {
      image: "assets/images/u2.webp",
      btn: "warn",
    },
    {
      image: "assets/images/u3.webp",
      btn: "primary",
    },
    {
      image: "assets/images/u4.webp",
      btn: "accent",
    },
    {
      image: "assets/images/u4.webp",
      btn: "accent",
    },
  ]
}
