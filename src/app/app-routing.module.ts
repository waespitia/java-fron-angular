import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaEmpleadosComponent } from './lista-empleados/lista-empleados.component';
import { RegistrarEmpleadoComponent } from './registrar-empleado/registrar-empleado.component';
import { ActualizarEmpleadoComponent } from './actualizar-empleado/actualizar-empleado.component';
import { EmpleadoDetalleComponent } from './empleado-detalle/empleado-detalle.component';

const routes: Routes = [
  {path : 'empleados',component:ListaEmpleadosComponent},
  {path:'',redirectTo:'empleados',pathMatch:'full'},
  {path : 'registrar-empleados',component:RegistrarEmpleadoComponent},
  {path : 'actulizar-empleado/:id',component: ActualizarEmpleadoComponent},
  {path : 'empleado-detalles/:id',component: EmpleadoDetalleComponent}
];
  
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
