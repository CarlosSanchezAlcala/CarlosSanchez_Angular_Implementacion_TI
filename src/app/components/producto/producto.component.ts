import { Component, OnInit } from '@angular/core';
import {ProductoService} from "../../services/producto.service";
import {Router} from "@angular/router";
import {ProductoModel} from "../../models/producto.model";

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss']
})
export class ProductoComponent implements OnInit {

  productos: any[] = [];

  constructor(private productoService: ProductoService,
              private router: Router) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll() {
    this.productoService.findAll().subscribe((res:  any) => {
      console.log(res);
      this.productos = res;
    })
  }

  navigateForm() {
    this.router.navigate(['producto-form']);
  }

  editarProducto(producto: ProductoModel) {
    this.productoService.productoSelected = producto;
    this.navigateForm();
  }

  deleteProducto(idProducto: number) {
    this.productoService.delete(idProducto).subscribe(res => {
      console.log('Se elimino correctamente: ', res);
      this.findAll();
    })
  }

}
