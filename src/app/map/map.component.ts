import { Component, OnInit } from '@angular/core';

import { ActionSheetController, Platform, AlertController } from '@ionic/angular';

import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsMapTypeId,
  GoogleMapsEvent,
  GoogleMapOptions,
  CameraPosition,
  MarkerOptions,
  Marker,
  Environment
} from '@ionic-native/google-maps';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {

  map: GoogleMap;

  constructor(
    public alertController: AlertController,
    public actionCtrl: ActionSheetController,
    private platform: Platform
  ) {
    if (this.platform.is('cordova')) {
      this.loadMap();
  }
}

ngOnInit() {}

loadMap(){
  Environment.setEnv({
		API_KEY_FOR_BROWSER_RELEASE: 'AIzaSyCi59lUhmU94aMbtUTUzjAy8uazuRRsXJA',
		API_KEY_FOR_BROWSER_DEBUG: 'AIzaSyCi59lUhmU94aMbtUTUzjAy8uazuRRsXJA',
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