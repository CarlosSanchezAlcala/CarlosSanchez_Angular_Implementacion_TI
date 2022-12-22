import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UsuarioComponent} from "./components/usuario/usuario.component";
import {UsuarioFormComponent} from "./components/usuario-form/usuario-form.component";
import {ClienteComponent} from "./components/cliente/cliente.component";
import {ClienteFormComponent} from "./components/cliente-form/cliente-form.component";
import {ProductoComponent} from "./components/producto/producto.component";
import {ProductoFormComponent} from "./components/producto-form/producto-form.component";

const routes: Routes = [
  {
    path: 'usuario',
    component: UsuarioComponent,
  },
  {
    path: 'usuario-form',
    component: UsuarioFormComponent,
  },
  {
    path: 'cliente',
    component: ClienteComponent,
  },
  {
    path: 'cliente-form',
    component: ClienteFormComponent,
  },
  {
    path: 'producto',
    component: ProductoComponent,
  },
  {
    path: 'producto-form',
    component: ProductoFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
