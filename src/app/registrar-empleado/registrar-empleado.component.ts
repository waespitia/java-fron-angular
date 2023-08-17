import { Component } from '@angular/core';
import { Empleado } from '../empleado';
import { EmpleadoService } from '../empleado.service';
import { Route, Router } from '@angular/router';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-registrar-empleado',
  templateUrl: './registrar-empleado.component.html',
  styleUrls: ['./registrar-empleado.component.css']
})
export class RegistrarEmpleadoComponent {

  empleado : Empleado = new Empleado();
  constructor(private empleadoServicio:EmpleadoService,private router:Router) { }

  ngOnInit(): void {
  }

  guardarEmpleado(){
    this.empleadoServicio.rergistarEmpleado(this.empleado).subscribe(dato => {
      console.log(dato);
      this.irALaListaDeEmpleados();
    },error => console.log(error));
  }

  irALaListaDeEmpleados(){
    this.router.navigate(['/empleados']);
    Swal.fire('Empleado registrado',`El empleado ${this.empleado.nombre} ha sido registrado con exito`,`success`);
  }

  onSubmit(){
    this.guardarEmpleado();
  }
}
