import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Luggage2DomainModule } from '@flight-workspace/luggage2/domain';
import { ReportLoss2Component } from './report-loss2.component';

@NgModule({
  imports: [CommonModule, Luggage2DomainModule],
  declarations: [ReportLoss2Component],
  exports: [ReportLoss2Component],
})
export class Luggage2FeatureReportLoss2Module {}
