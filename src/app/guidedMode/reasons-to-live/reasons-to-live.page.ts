import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { GuidedModeService } from 'src/app/core/guided-mode.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reasons-to-live',
  templateUrl: './reasons-to-live.page.html',
  styleUrls: ['./reasons-to-live.page.scss'],
})
export class ReasonsToLivePage implements OnInit {
  @ViewChild('slides', { static: true })slides: IonSlides;
  reasons = [];
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
  
  doCheck() {
    let prom1 = this.slides.isBeginning();
    let prom2 = this.slides.isEnd();
  
    Promise.all([prom1, prom2]).then((data) => {
      data[0] ? this.disablePrevBtn = true : this.disablePrevBtn = false;
      data[1] ? this.disableNextBtn = true : this.disableNextBtn = false;
    });
  }

  constructor(private guidedModeService: GuidedModeService, private router: Router) { }

  ngOnInit() {
    this.reasons = this.guidedModeService.getReasonsToLive();
  }

}
