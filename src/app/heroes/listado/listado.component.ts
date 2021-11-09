import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

  heroes: string[]  = ['Spider-Man', 'Hulk', 'Thor', 'Iron-Man','Capitan America'];
  heroeBorrado: string = '';

  borrarHeroe(): void {

    console.log('borrando....');
    this.heroeBorrado = this.heroes.splice(0,1).toString();

  }

}
