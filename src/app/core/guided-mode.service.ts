import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GuidedModeService {

  private copingStrategies = [
    {
      
        id: 1,
        name: 'Breathing Exercise',
        info: {
          externalUrl: '',
          slideImg: ''
        },
        type: 'exercise',
        buttonTxt: 'Start Exercise',
        skipBtnText: 'Skip Exercise'
    },
    {
      
        id: 2,
        name: 'Call Mom',
        info: {
          cellNo: '111111111',
          slideImg: '',
        },
        type: 'social',
        buttonTxt: 'Call Mom',
        skipBtnText: 'Skip Strategy'
    },
    {
      id: 3,
      name: 'Listen to Music',
      info: {
        playlistId: '37i9dQZF1DX3rxVfibe1L0',
      },
      type: 'music',
      buttonTxt: 'Launch Spotify',
      skipBtnText: 'Skip Strategy'

    }
  ];

  private reasonsToLive = [
    {
      
        id: 1,
        name: 'Max',
        imgUrl: '',
        skipBtnText: 'Next'
    }
  ];

  getStrategies(){
    return this.copingStrategies;
  }

  getReasonsToLive(){
    return this.reasonsToLive;
  }

  constructor() { }
}
