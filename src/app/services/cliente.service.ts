import { Injectable } from '@angular/core';
import {ClienteModel} from "../models/cliente.model";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  url: string = 'http://localhost:3000/Clientes';

  clienteSelected: ClienteModel | undefined = undefined;

  constructor(private http: HttpClient) { }

  findAll() {
    return this.http.get(this.url);
  }

  save(cliente: ClienteModel) {
    return this.http.post(this.url, cliente);
  }

  update(cliente: ClienteModel) {
    return this.http.put(this.url, cliente);
  }

  delete(idCliente: number) {
    return this.http.delete(`${this.url}/${idCliente}`);
  }

}
