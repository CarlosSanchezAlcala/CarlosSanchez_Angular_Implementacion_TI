import { Injectable } from '@angular/core';
import {ProductoModel} from "../models/producto.model";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  url: string = 'http://localhost:3000/Productos';

  productoSelected: ProductoModel | undefined = undefined;

  constructor(private http: HttpClient) { }

  findAll() {
    return this.http.get(this.url);
  }

  save(producto: ProductoModel) {
    return this.http.post(this.url, producto);
  }

  update(producto: ProductoModel){
    return this.http.put(this.url, producto);
  }

  delete(idProducto: number) {
    return this.http.delete(`${this.url}/${idProducto}`);
  }

}
