import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstLetterCapital'
})
export class FirstLetterCapitalPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    return `${value[0].toUpperCase()}${value.substr(1)}`;
  }

}
