import { Pipe, PipeTransform } from '@angular/core';
import { IUser } from '../interfaces/box.interface';

@Pipe({
  name: 'orderByAge'
})
export class OrderByAgePipe implements PipeTransform {

  transform(value: IUser[]): any {
    if(value){

      return value.sort( (a,b) => a.age - b.age );
    }
  }

}
