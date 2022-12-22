import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {UsuarioService} from "../../services/usuario.service";

@Component({
  selector: 'app-usuario-form',
  templateUrl: './usuario-form.component.html',
  styleUrls: ['./usuario-form.component.scss']
})
export class UsuarioFormComponent implements OnInit {

  usuarioForm: FormGroup = new FormGroup({});

  constructor(private router: Router,
              private fb: FormBuilder,
              public usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.initUsuarioForm();
  }

  navigateUsuario() {
    this.router.navigate(['usuario']);
  }

  initUsuarioForm() {
    this.usuarioForm = this.fb.group({
      idUsuario: [null],
      nombreUsuario: [null],
      apellidoPaternoUsuario: [null],
      apellidoMaternoUsuario: [null],
      dniUsuario: [null],
      claveUsuario: [null],
      nivelUsuario: [null],
      correoUsuario: [null],
      celularUsuario: [null],
      ubigeo: [null],
      direccionUsuario: [null],
      turnoUsuario: [null],
      estadoUsuario: [null]
    });
    if (this.usuarioService.usuarioSelect) {
      this.usuarioForm.patchValue(this.usuarioService.usuarioSelect);
    }
  }

  saveUsuario() {
    if (this.usuarioService.usuarioSelect) {
      // Actualizar
      this.updateUsuario();
    } else {
      // Crear o insertar
      this.createUsuario();
    }
  }

  createUsuario() {
    console.log("Datos del Usuario: ", this.usuarioForm.value);
    this.usuarioService.save(this.usuarioForm.value).subscribe(res => {
      console.log('Se guardo correctamente: ', res);
      this.usuarioForm.reset();
      this.navigateUsuario();
    });
  }

  updateUsuario() {
    console.log("Datos del Usuario: ", this.usuarioForm.value);
    this.usuarioService.update(this.usuarioForm.value).subscribe(res => {
      console.log('Se actualizo correctamente: ', res);
      this.usuarioForm.reset();
      this.navigateUsuario();
    });
  }

  ngOnDestroy() {
    this.usuarioService.usuarioSelect = undefined;
  }

}
