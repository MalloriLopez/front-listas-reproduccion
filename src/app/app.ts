import { Component } from '@angular/core';
import { CrearListaComponent } from './feature/listas/components/crear-lista/crear-lista.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CrearListaComponent
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {
  title = 'front-listas-reproduccion';
}

export const App = AppComponent;
