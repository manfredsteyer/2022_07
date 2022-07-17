import { Component, OnInit } from '@angular/core';
import { ReportLoss2Facade } from '@flight-workspace/luggage2/domain';

@Component({
  selector: 'luggage2-report-loss2',
  templateUrl: './report-loss2.component.html',
  styleUrls: ['./report-loss2.component.scss'],
})
export class ReportLoss2Component implements OnInit {
  lossReportList$ = this.reportLoss2Facade.lossReportList$;

  constructor(private reportLoss2Facade: ReportLoss2Facade) {}

  ngOnInit() {
    this.load();
  }

  load(): void {
    this.reportLoss2Facade.load();
  }
}
