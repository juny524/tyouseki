import { Injectable } from '@angular/core';
import { Subscription } from 'rxjs'
import { Subject } from 'rxjs';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiaccessService {

  private sharedDataSource = new Subject<Object>();
  public sharedDataSource$ = this.sharedDataSource.asObservable();

  constructor(private http: HttpClient) { }

  // public onNotifySharedDataChanged(updateed: Kendata) {
  //   console.log('[CommonService] onNotifySharedDataChanged fired.');
  //   this.sharedDataSource.next(updateed);
  // }

  public onNotifySharedDataChanged(dashboard_cm: DashboardComponent) {
    dashboard_cm.todays_weather = "これでいけんじゃね？？？"; // 無理だった
    
    
    //this.sharedDataSource.next(updateed);
  }

  getTide() {


    let today = new Date();
    let pc: string = "28";
    let hc: string = "9";
    let yr: string  = today.getFullYear() + "";
    let mn: string  = (today.getMonth() + 1) + "";
    let dy: string  = today.getDate() + "";
    let rg: string = "week";
    let api_url: string = "https://tide736.net/api/get_tide.php?pc=" + pc + "&hc=" + hc + "&yr=" + yr + "&mn=" + mn + "&dy=" + dy + "&rg=" + rg;

    return this.http.get(api_url);
    // httpObj.subscribe(this.getSuccess,this.getError);
  }

}
