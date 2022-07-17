import { Component, OnInit } from '@angular/core';
import { Checkin2Facade } from '@flight-workspace/luggage2/domain';

@Component({
  selector: 'luggage2-checkin2',
  templateUrl: './checkin2.component.html',
  styleUrls: ['./checkin2.component.scss'],
})
export class Checkin2Component implements OnInit {
  luggageList$ = this.checkin2Facade.luggageList$;

  constructor(private checkin2Facade: Checkin2Facade) {}

  ngOnInit() {
    this.load();
  }

  load(): void {
    this.checkin2Facade.load();
  }
}
