import { Pipe, PipeTransform } from '@angular/core';
import { FormControl } from '@angular/forms';

@Pipe({
  name: 'validControl'
})
export class ValidControlPipe implements PipeTransform {

  transform( control: FormControl): boolean {
    return !control.valid && !control.touched;
  }

}
