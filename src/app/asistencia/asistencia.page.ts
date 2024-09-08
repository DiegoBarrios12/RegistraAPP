import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-asistencia',
  templateUrl: './asistencia.page.html',
  styleUrls: ['./asistencia.page.scss'],
  animations: [
    trigger('fadeInAnimation', [
      state('void', style({
        opacity: 0
      })),
      transition('void => *', [
        animate('3s ease-in') 
      ])
    ])
  ]
})
export class AsistenciaPage implements OnInit {
  escaner = 'generar';
  qrVisible = false;
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
  showQRCode() {
    this.qrVisible = true;
}
}