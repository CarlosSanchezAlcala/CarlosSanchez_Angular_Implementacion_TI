import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {UsuarioService} from "../../services/usuario.service";
import {UsuarioModel} from "../../models/usuario.model";

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit {

  usuarios: any[] = [];

  constructor(private usuarioService: UsuarioService,
              private router: Router) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll() {
    this.usuarioService.findAll().subscribe((res: any) => {
      console.log(res);
      this.usuarios = res;
    })
  }

  navigateForm() {
    this.router.navigate(['usuario-form']);
  }

  editarUsuario(usuario: UsuarioModel) {
    this.usuarioService.usuarioSelect = usuario;
    this.navigateForm();
  }

  deleteUsuario(idUsuario: number) {
    this.usuarioService.delete(idUsuario).subscribe(res => {
      console.log('Se elimino correctamente: ', res);
      this.findAll();
    })
  }

}
