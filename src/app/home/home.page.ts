import { Component, OnInit } from '@angular/core';
import { ActionSheetController, Platform, AlertController } from '@ionic/angular';

import {
  GoogleMaps,
  GoogleMap,
  Environment
} from '@ionic-native/google-maps';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  map: GoogleMap;
    constructor(
  
        public alertController: AlertController,
        public actionCtrl: ActionSheetController,
        private platform: Platform

    ) {
        if (this.platform.is('cordova')) {
        
    }
  }
  ngOnInit() {
    this.loadMap();
  }
  
  loadMap() {
  
    
    Environment.setEnv({
      API_KEY_FOR_BROWSER_RELEASE: 'AIzaSyDvj-kehos36EKwDS2WM7twOkupMS0f6kY', // Clée Google map
      API_KEY_FOR_BROWSER_DEBUG: 'AIzaSyDvj-kehos36EKwDS2WM7twOkupMS0f6kY'
    });
    this.map = GoogleMaps.create('map_canvas', {
      camera: {
        target: {
          lat: 43.610769,
          lng: 3.876716
        },
        zoom: 12,
        tilt: 30
      }
    });
}
}