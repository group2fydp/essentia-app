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
        buttonTxt: 'Call Mom',
        skipBtnText: 'Skip Strategy'
    }
  ];

  private reasonsToLive = [
    {
<<<<<<< HEAD
      
        id: 1,
        name: 'Max',
        imgUrl: '',
        skipBtnText: 'Next'
    }
  ];
=======
      id: 1,
      name: 'Max',
      recommendations: [
        {
          text: 'Thing about the things that bring you joy in life'
        }
      ]
    }
  ]
>>>>>>> 67284f1d630e3a54d0685719ab541f2a7b9348a8

  getStrategies(){
    return this.copingStrategies;
  }

  getReasonsToLive(){
    return this.reasonsToLive;
  }
  
  getReasonsToLive(){
    return this.reasonsToLive;
  }

  constructor() { }
}
