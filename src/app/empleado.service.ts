import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Empleado } from './empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {
  
  //URL obtiene el listado de los empleados en el back
  private baseURL = "http://localhost:8080/api/v1/empleados";
  
  constructor(private httpClient : HttpClient) { }

  //Metodo utilizado para obtener los empleados
  obtenerListaDeEmpleados():Observable<Empleado[]>{
    return this.httpClient.get<Empleado[]>(`${this.baseURL}`);
  }

  //este metodo se usa para guardar el empleado
  rergistarEmpleado(empleado:Empleado) : Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,empleado);

  }

  //este metodo sirve para obtener o buscar un empleado
  obtenerEmpleadoPorId(id:number):Observable<Empleado>{
    return this.httpClient.get<Empleado>(`${this.baseURL}/${id}`);
  }

  actualizarEmpleado(id:number,empleado:Empleado) : Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`,empleado);
  }

  eliminarEmpleado(id:number) : Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }

}
