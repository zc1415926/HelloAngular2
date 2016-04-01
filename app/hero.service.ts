/**
 * Created by zc1415926 on 2016/4/1.
 */
import {Injectable} from 'angular2/core';
import {HEROES} from './mock-heroes';
import {Hero} from "./hero";

@Injectable()
export class HeroService {
    getHeroes() {
        return Promise.resolve(HEROES);
    }

    getHeroesSlow(){
        return new Promise<Hero[]>(resolve => setTimeout(()=>resolve(HEROES), 2000));
    }
}