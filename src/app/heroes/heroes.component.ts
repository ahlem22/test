import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {
  assya: Hero ;
  heroes: Hero[] = [{
    id : 1 ,
    name : 'windstorm',
  },
  {
    id : 2 ,
    name : 'zied',
  }
];
  constructor() { }

  ngOnInit() {
  }

  onSelect(hero: Hero): void {
   this.assya = hero ;
  }

}
