import { Component, OnInit, ViewChild } from '@angular/core';
import { GuidedModeService } from 'src/app/core/guided-mode.service';
import { Router } from '@angular/router';
import { IonSlides, NavController } from '@ionic/angular';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { Device } from '@ionic-native/device/ngx';
import { AppAvailability } from '@ionic-native/app-availability/ngx';

@Component({
  selector: 'app-coping-strategies',
  templateUrl: './coping-strategies.page.html',
  styleUrls: ['./coping-strategies.page.scss'],
})
export class CopingStrategiesPage implements OnInit {
 
  @ViewChild('slides', { static: true })slides: IonSlides;
  strategies = [];
  disablePrevBtn = true;
  disableNextBtn = false;
  sliderConfig = {
  };

  getNextSlide(){
    this.slides.slideNext();
  }

  getPrevSlide(){
    this.slides.slidePrev();
  }

  startStrategy(strategyId: any){
    let strategy = this.strategies.find(s => s.id === strategyId);
    if(strategy.type == 'music'){
      this.openSpotify(strategy.info.playlistId);
    }
  }

  launchExternalApp(iosSchemaName: string, androidPackageName: string, appUrl: string, httpUrl: string, credentials: string){
    let app: string;
    if (this.device.platform === 'iOS') {
      app = iosSchemaName;
    } else if (this.device.platform === 'Android') {
      app = androidPackageName;
    } else {
      this.inAppBrowser.create(httpUrl + credentials, '_system');
      return;
    }
  
    this.appAvailability.check(app).then(
      () => { // success callback
        this.inAppBrowser.create(appUrl + credentials, '_system');
      },
      () => { // error callback
        this.inAppBrowser.create(httpUrl + credentials, '_system');
      }
    );
  }

  openSpotify(playlistId: string) {
    this.launchExternalApp('spotify://', 'com.spotify.android', 'spotify://playlist/', 'https://open.spotify.com/playlist/', playlistId);
  }

  doCheck() {
    let prom1 = this.slides.isBeginning();
    let prom2 = this.slides.isEnd();
  
    Promise.all([prom1, prom2]).then((data) => {
      data[0] ? this.disablePrevBtn = true : this.disablePrevBtn = false;
      data[1] ? this.disableNextBtn = true : this.disableNextBtn = false;
    });
  }


  constructor(
    private guidedModeService: GuidedModeService, 
    private router: Router,
    public navCtrl: NavController,
    private inAppBrowser: InAppBrowser,
    private device: Device,
    private appAvailability: AppAvailability
    ) { 

  }

  ngOnInit() {
    this.strategies = this.guidedModeService.getStrategies();
  }

}
