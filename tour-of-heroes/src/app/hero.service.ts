import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class HeroService {

  private heroesUrl = 'http://127.0.0.1:5000';  // URL to web api
  constructor(private messageService: MessageService, private http: HttpClient) { }

  getHeroes(): Observable<Hero[]> {
    //const heroes = of(HEROES);
    const heroes = this.http.get<Hero[]>(this.heroesUrl + '/heroes');

    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }

  getHero(id: number): Observable<Hero> {
    // For now, assume that a hero with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    const hero = this.http.get<Hero>(this.heroesUrl+ '/detail/' + id.toString());
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return hero;
  }
}