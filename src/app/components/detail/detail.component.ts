import { Component } from '@angular/core';
import { ListService} from '../../services/list.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {

  

  details = []

  constructor(public listService: ListService) {
    this.listService.getHeroes().subscribe(data2 => {this.details = this.shuffle (data2);} ) 
  }

  shuffle(arr: import("../../../../../HeroFinder/src/app/Interfaces/Data").Data[]) {
    return arr.sort(() => Math.random () -0.5);

  }

 
}
