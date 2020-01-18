import { Pipe, PipeTransform } from '@angular/core';

@Pipe({

    name: 'filter'

})

export class FilterPipe implements PipeTransform {

    transform(value: any, arg: any): any {
        if(arg == "") return "";
        const resultSearch = [];
       for(const valor of value){
           if(valor.name.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
               resultSearch.push(valor);

            };
    

        };
            
        
        return resultSearch;
        
          }
        }
        