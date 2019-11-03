import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Platform } from '@ionic/angular';
import { filter } from 'minimatch';



@Injectable({
  providedIn: 'root'
})
export class TabsService {
  private hideTabBarPages: string[] = [
  ];

  routeParamPages: string[] = [
    'safety-plan',
    'resources',
    'info'
  ];

  constructor(private router: Router, private platform: Platform) { 
    this.platform.ready().then(() => {
      this.navEvents();
    });
  }

  private navEvents() {
    this.router.events.subscribe(e => {
      if(e instanceof NavigationEnd){
        console.log(e);
        this.showHideTabs(e);
      }
    });
  }

  private showHideTabs(e: any) {
    const urlArray = e.url.split('/');
    const pageUrlParent = urlArray[urlArray.length - 2];
    const pageUrl = urlArray[urlArray.length - 1];
    const page = pageUrl.split('?')[0];
    const hideParamPage = this.routeParamPages.indexOf(pageUrlParent) > -1 && !isNaN(Number(page));
    const shouldHide = this.hideTabBarPages.indexOf(page) > -1 || hideParamPage;
    try {
      setTimeout(() => shouldHide ? this.hideTabs() : this.showTabs(), 300);
    } catch (err) {
    }
   }

   public hideTabs() {
    const tabBar = document.getElementById('myTabBar');
    if (tabBar !== null && tabBar.style.display !== 'none') tabBar.style.display = 'none';
  }
  
  public showTabs() {
    const tabBar = document.getElementById('myTabBar');
    if (tabBar !== null && tabBar.style.display !== 'flex') tabBar.style.display = 'flex';
  }
}
