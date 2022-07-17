import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { Luggage2FeatureCheckin2Module } from '@flight-workspace/luggage2/feature-checkin2';
import { HttpClientModule } from '@angular/common/http';
import { Luggage2FeatureReportLoss2Module } from '@flight-workspace/luggage2/feature-report-loss2';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [
    BrowserModule,
    Luggage2FeatureCheckin2Module,
    HttpClientModule,
    Luggage2FeatureReportLoss2Module,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
