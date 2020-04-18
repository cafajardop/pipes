import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre     : string   = 'Capitán América';
  nombre2    : string   = 'CarLOS AnDrEs fAjARdo pEdRaZa'
  cursos     : string[] = ['JavaScript', 'NodeJS', 'React', 'Angular', 'Mongo', 'CSharp'];
  PI         : number   = Math.PI;
  porcentaje : number   = 0.234;
  salario    : number   = 1234.5;
  fecha      : Date     = new Date();

  videoUrl   :string    = 'https://www.youtube.com/embed/2ZRZodDcu_A';

  valorPromesa = new Promise<string>((resolve) => {

    setTimeout(() => {
      resolve('LLego la data');
    }, 4500);

  });

  heroe = {
    nombre: 'Carlos',
    clave: 'Desarrollador Full Stack',
    edad: 23,
    direccion: {
      calle: 'Primera',
      casa: 20
    }
  }
}
