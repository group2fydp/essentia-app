import { Component, OnInit, ViewChild } from '@angular/core';
import { GuidedModeService } from 'src/app/core/guided-mode.service';
import { Router } from '@angular/router';
import { IonSlides } from '@ionic/angular';
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
    onlyExternal: false
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


  constructor(private guidedModeService: GuidedModeService, private router: Router) { 

  }

  ngOnInit() {
    this.strategies = this.guidedModeService.getStrategies();
  }

}
