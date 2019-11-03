import { Component, OnInit } from '@angular/core';
import { NavController, PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-safety-plan',
  templateUrl: './safety-plan.page.html',
  styleUrls: ['./safety-plan.page.scss'],
})
export class SafetyPlanPage implements OnInit {
  
  copingStrategies = [
    {
      id: 1,
      name: 'Coping Strategy 1'
    },
    {
      id: 2,
      name: 'Coping Strategy 2'
    },
    {
      id: 3,
      name: 'Coping Strategy 3'
    }
  ];
  reasonsToLive = [
    {
      id: 1,
      name: 'Reason to Live 1'
    },
    {
      id: 2,
      name: 'Reason to Live 2'
    },
    {
      id: 3,
      name: 'Reason to Live 3'
    }
    
  ];
  emergencyContacts = [
    {
      id: 1,
      name: 'Emergency Contact 1'
    },
    {
      id: 2,
      name: 'Reason to Live 2'
    }
  ];
  placesToGo = [
    {
      id: 1,
      name: 'Place to Go 1'
    },
    {
      id: 2,
      name: 'Place to Go 2'
    }
  ];
  constructor(public navCtrl: NavController) { }
  
  ngOnInit() {
  }
}


