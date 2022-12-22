import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {ProductoService} from "../../services/producto.service";

@Component({
  selector: 'app-producto-form',
  templateUrl: './producto-form.component.html',
  styleUrls: ['./producto-form.component.scss']
})
export class ProductoFormComponent implements OnInit {

  productoForm: FormGroup = new FormGroup({});

  constructor(private router: Router,
              private fb: FormBuilder,
              public productoService: ProductoService) { }

  ngOnInit(): void {
    this.initProductoForm();
  }

  navigateProducto() {
    this.router.navigate(['producto'])
  }

  initProductoForm() {
    this.productoForm = this.fb.group({
      idProducto: [null],
      nombreProducto: [null],
      tipoProducto: [null],
      descripcionProducto: [null],
      precioProducto: [null],
      stockProducto: [null],
      estadoProducto: [null]
    });
    if (this.productoService.productoSelected) {
      this.productoForm.patchValue(this.productoService.productoSelected);
    }
  }

  saveProducto() {
    if (this.productoService.productoSelected) {
      // Actualizar
      this.updateProducto();
    } else {
      // Crear o insertar
      this.createProducto();
    }
  }

  createProducto() {
    console.log("Datos del Producto: ", this.productoForm.value);
    this.productoService.save(this.productoForm.value).subscribe(res => {
      console.log('Se guardo correctamente: ', res);
      this.productoForm.reset();
      this.navigateProducto();
    });
  }

  updateProducto() {
    console.log("Datos del Producto: ", this.productoForm.value);
    this.productoService.update(this.productoForm.value).subscribe(res => {
      console.log('Se actualizo correctamente: ', res);
      this.productoForm.reset();
      this.navigateProducto();
    });
  }

  ngOnDestroy() {
    this.productoService.productoSelected = undefined;
  }

}
