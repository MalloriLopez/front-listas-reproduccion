import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, ReactiveFormsModule  } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ListasReproduccionService } from '../../services/listas-reproduccion.service';



@Component({
  selector: 'app-crear-lista',
  standalone: true,
  templateUrl: './crear-lista.component.html',
  styleUrls: ['./crear-lista.component.scss'],
  imports: [CommonModule, ReactiveFormsModule] 
})
export class CrearListaComponent {
  listaForm: FormGroup;

  constructor(private fb: FormBuilder,
    private listaService: ListasReproduccionService  ) {
    this.listaForm = this.fb.group({
      id: [null],
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
      canciones: this.fb.array([])
    });
  }

 
  get canciones(): FormArray {
    return this.listaForm.get('canciones') as FormArray;
  }

  agregarCancion() {
    const cancionForm = this.fb.group({
      id: [null],
      titulo: ['', Validators.required],
      artista: ['', Validators.required],
      album: [''],
      anno: [''],
      genero: ['']
    });
    this.canciones.push(cancionForm);
  }

  eliminarCancion(index: number) {
    this.canciones.removeAt(index);
  }

  enviarLista() {
    if (this.listaForm.valid) {
     
      this.listaService.crearLista(this.listaForm.value).subscribe({
        next: (respuesta) => {
          alert('Lista creada exitosamente');
          this.listaForm.reset();
        
          this.canciones.clear();
        },
        error: (err) => {
          alert('Error al crear la lista');
          console.error(err);
        }
      });
    } else {
      this.listaForm.markAllAsTouched();
    }
  }
  
}
