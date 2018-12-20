import { Component, OnInit } from '@angular/core';
import {HeroService} from '../hero.service'
import {Hero} from '../hero';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  selectedHero:Hero;
  onSelect(hero:Hero){
    this.selectedHero = hero;
  }
  heroes:Hero[];
  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(heroes=>this.heroes=heroes)
  }
  constructor(private heroService:HeroService) {
    // console.log(this.heroes)
  }

  ngOnInit() {
    this.getHeroes();
  }

}
