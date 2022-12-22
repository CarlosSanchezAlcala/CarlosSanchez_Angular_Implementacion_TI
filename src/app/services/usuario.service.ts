import { Injectable } from '@angular/core';
import {UsuarioModel} from "../models/usuario.model";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  url: string = 'http://localhost:3000/Usuario';

  constructor(private http: HttpClient) { }

  usuarioSelect: UsuarioModel | undefined = undefined;

  findAll() {
    return this.http.get(this.url);
  }

  save(usuario: UsuarioModel) {
    return this.http.post(this.url, usuario);
  }

  update(usuario: UsuarioModel){
    return this.http.put(this.url, usuario);
  }

  delete(idUsuario: number) {
    return this.http.delete(`${this.url}/${idUsuario}`);
  }

}
