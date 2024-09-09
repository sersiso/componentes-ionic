import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  constructor(private alertCtrl: AlertController) { }

  ngOnInit() {
  }

  onClick(){
    this.presentAlert();
  }

  onClick2(){
    this.presentAlertMultipleButtons();
  }

  onClick3(){
    this.presentAlertPrompt();
  }

  // Un solo botón
  async presentAlert() {
    const alert = await this.alertCtrl.create({
      backdropDismiss: false,
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message',
      buttons: ['OK'],
    });
    await alert.present();
  }

  // Varios botones con propiedades
  async presentAlertMultipleButtons() {
    const alert = await this.alertCtrl.create({
      backdropDismiss: false,
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message',
      buttons: [
        {
          text: 'Ok!',
          handler: () => {
            console.log("Pulsado ok");
          },
        },
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'rojo'
        },
      ],
    });
    await alert.present();
  }

  // Con formulario
  async presentAlertPrompt() {
    const alert = await this.alertCtrl.create({
      backdropDismiss: false,
      header: 'Introduce la información',
      inputs: [
        {
          name: 'Nombre',
          type: 'text',
          placeholder: 'Placeholder 1'
        },
        {
          name: 'area',
          type: 'textarea',
          id: 'textarea',
          placeholder: 'Escribe la descripción'
        },
        {
          name: 'url',
          type: 'url',
          value: 'http://prueba.com',
          placeholder: 'Escribe la descripción'
        },
        {
          name: 'password',
          type: 'password',
          cssClass: 'specialClass',
          attributes: {
            maxlength: 4,
            inputmode: 'decimal'
          }
        },
        {
          name: 'números',
          type: 'number',
          placeholder: 'números'
        },
        {
          name: 'date',
          type: 'date',
          min: '2017-03-01',
          max: '2018-01-12'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary'
        },
        {
          text: 'OK',
          handler: (data:any) => {
            // recoge los datos del formulario
            console.log('confirmo', data);
          }
        }
      ]
    });
    await alert.present();
  }



}
