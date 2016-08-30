import { Injectable } from '@angular/core';
import { Storage, LocalStorage } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class WorkoutData {
  data:any;
  local:Storage;

  constructor(private http:Http) {
    this.local = new Storage(LocalStorage);
  }

  getWorkoutList():any {

    return new Promise(resolve => {

      // Check if we have the list in the local storage
      this.local.get('WorkoutList').then((list) => {
        if (list) {
          // We have a list, so we try to find out the date
          this.local.get('WorkoutListDate').then((date) => {
            if (date && this.newerThanAWeek(date)) {
              // The data is valid, so we don't do the http request
              console.log("Data retrieved from localStorage");
              resolve(JSON.parse(list));
            } else {
              // Data is old, so we make the Http request
              this.http.get('https://athl3tics.de/api-workout-v1/')
                  .map(res => res.json())
                  .subscribe(listDataFromServer => {
                    console.log("Return HTTP Request");
                    // Save this information to use it later
                    this.saveInfoInLocalStorage(listDataFromServer).then(() => {
                      // Data is saved now, so we can send it to the user
                      resolve(listDataFromServer);
                    });
                  });
            }
          });
        } else {
          // We don't have the list stored so we make the Http request
          this.http.get('https://athl3tics.de/api-workout-v1/')
              .map(res => res.json())
              .subscribe(listDataFromServer => {
                console.log("Return HTTP Request");
                // Save this information to use it later
                this.saveInfoInLocalStorage(listDataFromServer).then(() => {
                  // Data is saved now, so we can send it to the user
                  resolve(listDataFromServer);
                });
              });
        }
      });
    });
  }

  public saveInfoInLocalStorage(data:Array<any>) {
    var date = new Date;
    // Save the list first
    return this.local.set('WorkoutList', JSON.stringify(data)).then(() => {
      // Now we set the date
      this.local.set('WorkoutListDate', date.toDateString());
    });
  }

  public newerThanAWeek(storedDateStr:string) {
    let today = new Date();
    let storedDate = new Date(storedDateStr);
    let timeDiff = Math.abs(today.getTime() - storedDate.getTime());
    let diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));

    if (diffDays < 7) {
      return true;
    }
    return false;

  }
}
