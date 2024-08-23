import { Pipe, PipeTransform } from '@angular/core';
import { numberFormatterUtility } from '../utilities/numberFormatter.utility';

@Pipe({
  name: 'numberFormatter',
  standalone: true,
})
export class NumberFormatterPipe implements PipeTransform {
  transform(value: any, ...args: any[]) {
    return numberFormatterUtility(value);
  }
}
