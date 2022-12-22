import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {ClienteService} from "../../services/cliente.service";

@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.scss']
})
export class ClienteFormComponent implements OnInit {

  clienteForm: FormGroup = new FormGroup({});

  constructor(private router: Router,
              private fb: FormBuilder,
              public clienteService: ClienteService) { }

  ngOnInit(): void {
    this.initClienteForm();
  }

  navigateCliente() {
    this.router.navigate(['cliente'])
  }

  initClienteForm() {
    this.clienteForm = this.fb.group({
      idCliente: [null],
      nombrecliente: [null],
      apellidoPaternoCliente: [null],
      apellidoMaternoCliente: [null],
      dniCliente: [null],
      correoCliente: [null],
      celularCliente: [null],
      ubigeo: [null],
      direccionCliente: [null],
      estadoCliente: [null],
    });
    if (this.clienteService.clienteSelected) {
      this.clienteForm.patchValue(this.clienteService.clienteSelected);
    }
  }

  saveCliente() {
    if (this.clienteService.clienteSelected) {
      // Actualizar
      this.updateCliente();
    } else {
      // Crear o insertar
      this.createCliente();
    }
  }

  createCliente() {
    console.log("Datos del Cliente: ", this.clienteForm.value);
    this.clienteService.save(this.clienteForm.value).subscribe(res => {
      console.log('Se guardo correctamente: ', res);
      this.clienteForm.reset();
      this.navigateCliente();
    });
  }

  updateCliente() {
    console.log("Datos del Cliente: ", this.clienteForm.value);
    this.clienteService.update(this.clienteForm.value).subscribe(res => {
      console.log('Se actualizo correctamente: ', res);
      this.clienteForm.reset();
      this.navigateCliente();
    });
  }

  ngOnDestroy() {
    this.clienteService.clienteSelected = undefined;
  }

}
