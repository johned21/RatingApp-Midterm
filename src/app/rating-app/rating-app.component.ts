import { Component, OnInit } from '@angular/core';
import {NgbPanelChangeEvent} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-rating-app',
  templateUrl: './rating-app.component.html',
  styleUrls: ['./rating-app.component.css']
})
export class RatingAppComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  currentRate1 = 0;
  currentRate2 = 0;
  currentRate3 = 0;
  currentRate4 = 0;
  currentRate5 = 0;

  public beforeChange($event: NgbPanelChangeEvent) {

    if ($event.panelId === 'preventchange-2') {
      $event.preventDefault();
    }

    if ($event.panelId === 'preventchange-3' && $event.nextState === false) {
      $event.preventDefault();
    }
  }

}
