import { Component } from '@angular/core';
import { CrearListaComponent } from './feature/listas/components/crear-lista/crear-lista.component';
import { ObtenerListasComponent } from './feature/listas/components/obtener-listas/obtener-listas.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CrearListaComponent,
    ObtenerListasComponent
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {
  title = 'front-listas-reproduccion';
}

export const App = AppComponent;
