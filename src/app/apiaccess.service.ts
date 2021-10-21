import { Injectable } from '@angular/core';
import { Subscription } from 'rxjs'
import { Subject } from 'rxjs';
import { DashboardComponent } from './dashboard/dashboard.component';

@Injectable({
  providedIn: 'root'
})
export class ApiaccessService {

  private sharedDataSource = new Subject<Object>();
  public sharedDataSource$ = this.sharedDataSource.asObservable();

  constructor() { }

  // public onNotifySharedDataChanged(updateed: Kendata) {
  //   console.log('[CommonService] onNotifySharedDataChanged fired.');
  //   this.sharedDataSource.next(updateed);
  // }

  public onNotifySharedDataChanged(dashboard_cm: DashboardComponent) {
    dashboard_cm.todays_weather = "これでいけんじゃね？？？"; // 無理だった
    
    
    //this.sharedDataSource.next(updateed);
  }


}
