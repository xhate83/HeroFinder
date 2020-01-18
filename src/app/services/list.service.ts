import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Data } from '../Interfaces/Data';


@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor(public http: HttpClient) { }

  getHeroes() {
    return this.http.get <Data []> ('https://akabab.github.io/superhero-api/api/all.json');
  }

    

}