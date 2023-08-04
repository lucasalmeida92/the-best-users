import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  public isLoading = new Subject<boolean>();

  show() {
    console.log('..........SHOW')
    this.isLoading.next(true);
  }

  hide() {
    console.log('....HIDE')
    this.isLoading.next(false);
  }
}
