import { Component, OnInit } from '@angular/core';
import{
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formulariologin: FormGroup;
  constructor(public fb: FormBuilder, public alertController: AlertController) { 
    this.formulariologin= this.fb.group({
      'nombre': new FormControl("",Validators.required),
      'contraseña': new FormControl("",Validators.required)
  })
}
  ngOnInit() {


    
    }

    async ingresar(){
      var f= this.formulariologin.value;

      var usuario = localStorage.getItem('usuario');
        if (usuario !== null && JSON.parse(usuario).nombre == f.nombre && JSON.parse(usuario).contraseña == f.contraseña){
            console.log('ingresado');
          } else {
          const alert = await this.alertController.create({
          header: 'Datos incorrectos',
          message: 'Debes llenar todos los campos o no existe usuario registrado',
          buttons: ['Aceptar']
        });
          alert.present();
        }

      }
    }



