import { Component, OnInit , Input } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-ahlem',
  templateUrl: './ahlem.component.html',
  styleUrls: ['./ahlem.component.css']
})
export class AhlemComponent implements OnInit {
  @Input() hero: Hero ;
  constructor() { }

  ngOnInit() {
  }

}
