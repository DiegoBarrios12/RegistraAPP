import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-asistencia',
  templateUrl: './asistencia.page.html',
  styleUrls: ['./asistencia.page.scss'],
})
export class AsistenciaPage implements OnInit {
  escaner = 'generar';
  alumnos: { nombre: string, apellido: string, edad: string }[] = [];
agregarAlumno() {
  const nuevoAlumno = {
    nombre: 'Nuevo Alumno',
    apellido: 'Apellido',
    edad: 'edad'
  };
  this.alumnos.push(nuevoAlumno);
}
  constructor() { }

  ngOnInit() {
  }

}