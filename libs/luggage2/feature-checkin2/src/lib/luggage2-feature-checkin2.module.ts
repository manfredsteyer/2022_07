import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Luggage2DomainModule } from '@flight-workspace/luggage2/domain';
import { Checkin2Component } from './checkin2.component';

import { EditFacade } from '@flight-workspace/passenger/domain';

@NgModule({
  imports: [CommonModule, Luggage2DomainModule],
  declarations: [Checkin2Component],
  exports: [Checkin2Component],
})
export class Luggage2FeatureCheckin2Module {}
