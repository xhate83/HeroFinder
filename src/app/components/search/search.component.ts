import { Component } from '@angular/core';
import { ListService} from '../../services/list.service';
 
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent  {
  
  search = []

  constructor(public listService: ListService) {
    this.listService.getHeroes().subscribe(data1 => {this.search = this.shuffle (data1);} ) 
  }

  shuffle(arr: import("../../../../../HeroFinder/src/app/Interfaces/Data").Data[]) {
    return arr.sort(() => Math.random () -0.5);

  }


}
