import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizado'
})
export class CapitalizadoPipe implements PipeTransform {

  // transform(value: any, ...args: any[]): string { => es una manera de enviar un arreglo con destructuracion de objetos ...
  //transform(value: any, edad: number, activo: boolean, mensaje: string): string {
  transform(value: string, todas: boolean = true): string {

    value = value.toLocaleLowerCase();
    let nombres = value.split(' ');

    if (todas) {
      nombres = nombres.map(nombre => {
        return nombre[0].toUpperCase() + nombre.substr(1);
      })
    }
    else {
      nombres[0] = nombres[0][0].toUpperCase() + nombres[0].substr(1);
    }
    return nombres.join(' ');
  }
  // console.log(edad,activo,mensaje);
  //console.log(args);
  // console.log();
    
  //   return 'Hola Mundo';
  }


