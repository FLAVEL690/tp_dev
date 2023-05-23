import { Component, Input } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
 
  
  constructor(public actionSheetController: ActionSheetController) {}
  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'CEEF est une application de transfert de photos via différentes ressources notamment whatsapp, telegram, bluetooth etc. Elle assure aussi le scan pour trouver les appareils bluetooth à proximité et afficher les informations de appareil ',
      buttons: [
        {
          text: 'OK',
          role: 'cancel',
          handler: () => { console.log(''); }
        },
        
      ]
    });
    await actionSheet.present();
    const { role } = await actionSheet.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

}
