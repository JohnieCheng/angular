import {Hero} from "./Hero";

let hero = new Hero();
hero.name = 'hero1';
let heroArr = [];
for (let i = 0; i < 10; i++) {
  let hero = new Hero();
  hero.name = `hero${i}`;
  heroArr.push(hero);
}
export const HEROES = heroArr;
