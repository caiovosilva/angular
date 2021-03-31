import { Component } from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ANGULAAAAAR';
  url = 'https://i.imgur.com/Ef9VxgU.jpg';

  
  public constructor(private titleService: Title ) { 
    this.setTitle(this.title)
  }

  public setTitle( newTitle: string) {
    this.titleService.setTitle( newTitle );
  }
}