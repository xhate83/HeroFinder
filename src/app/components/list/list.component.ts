import { Component } from '@angular/core';
import { ListService} from '../../services/list.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent {

  heroes = []

  constructor(public listService: ListService) {
    this.listService.getHeroes().subscribe(data =>{this.heroes = this.shuffle(data);})

    

   }

  shuffle(arr: import("../../../../../HeroFinder/src/app/Interfaces/Data").Data[]) {
    return arr.sort(() => Math.random () -0.5);

  }
}