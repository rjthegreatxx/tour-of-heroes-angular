import { Component } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {

  // value = 1.23;

  heroes = HEROES;
  selectedHero?: Hero;

  // hero: Hero = {
  //   id: 1,
  //   name: 'Big Boy'
  // };

  onSelect(hero: Hero): void{
    this.selectedHero = hero;
    console.log(hero);
  }

}
