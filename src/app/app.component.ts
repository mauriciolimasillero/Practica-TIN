import { Component } from '@angular/core';
import { CompileShallowModuleMetadata } from '@angular/compiler';
import { UsuariosService } from './usuarios.service';
import { FormsModule, ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: ['.activo{background:green;}']
})
export class AppComponent {
  mensaje = 'Curso de Angular';
  nombre = 'Luis';
  botonStatus = true;
  isActive = true;
  getNombre(){
    return this.nombre;
  }

  imagenURL = 'http://lorempixel.com/400/200/'
  

  save(e){
    console.log(e);
  }
  onKeyUp(usuario){
    console.log(usuario);
  }

  persona = {
    nombre : 'Luis',
    edad : 15
  }

  personas : any = [];
  constructor(private usuarioservice : UsuariosService){
    //let usuario = new UsuariosService();
    this.personas = usuarioservice.getUsuarios();
  }

  miFormulario = new FormGroup({
    username : new FormControl('', Validators.required),
    userpassword : new FormControl('', Validators.required)
  });
}
