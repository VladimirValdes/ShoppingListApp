import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalLetters'
})
export class CapitalLettersPipe implements PipeTransform {

  transform(category: string): string {


    let newCategory = '';
    const words = category.split(' ');


    words.forEach( word => {

        if ( word === 'AND') {
            word = word.toLowerCase();
        } else {
          word = word[0].toUpperCase() + word.slice(1).toLowerCase();
        }

        newCategory += word + ' ';
    });

    return newCategory;
  }

}
