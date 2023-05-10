import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'conversorPrecio'
})
export class ConversorPrecioPipe implements PipeTransform {

  transform(value: number): string {
    return value.toLocaleString('es-ES');
  }
}
