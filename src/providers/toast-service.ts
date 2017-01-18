import { Injectable } from '@angular/core';
import { ToastController } from 'ionic-angular';

@Injectable()
export class ToastService {

  constructor(public toastController: ToastController) {
  }

  showMessage(title: string) {
    let toast = this.toastController.create({
      message: 'Elimino el element ' + title,
      duration: 3000,
      position: 'top'
    });

    toast.present();
  }


}
