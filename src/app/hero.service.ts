import { Injectable } from '@angular/core';
import {Hero} from './hero'
import {HEROES} from './mock-hero'
import {Observable,of} from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class HeroService {
  heroes:Hero[]=HEROES;
  getHeroes():Observable<Hero[]>{
    return of(this.heroes)
  }
  getHero(id: number): Observable<Hero> {
    // TODO: send the message _after_ fetching the hero
    // this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }
  constructor() { }
}
