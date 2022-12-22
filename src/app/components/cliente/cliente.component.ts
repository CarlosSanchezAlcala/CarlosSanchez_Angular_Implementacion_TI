import { Component, OnInit } from '@angular/core';
import {ClienteService} from "../../services/cliente.service";
import {Router} from "@angular/router";
import {ClienteModel} from "../../models/cliente.model";

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss']
})
export class ClienteComponent implements OnInit {

  clientes: any[] = [];

  constructor(private clienteService: ClienteService,
              private router: Router) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll() {
    this.clienteService.findAll().subscribe((res: any) => {
      console.log(res);
      this.clientes = res;
    })
  }

  navigateForm() {
    this.router.navigate(['cliente-form']);
  }

  editarCliente(cliente: ClienteModel) {
    this.clienteService.clienteSelected = cliente;
    this.navigateForm();
  }

  deleteCliente(idCliente: number) {
    this.clienteService.delete(idCliente).subscribe(res => {
      console.log('Se elimino correctamente: ', res);
      this.findAll();
    })
  }

}
