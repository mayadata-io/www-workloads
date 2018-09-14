import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subscription, Observable, timer } from 'rxjs';

@Component({
  selector: 'app-workloadstable',
  templateUrl: './workloadstable.component.html',
  styleUrls: ['./workloadstable.component.scss']
})
export class WorkloadstableComponent implements OnInit {
  mongoStatus: any;
  mongoOk: any;
  perconaStatus: any;
  perconaOk: any;
  constructor(private http: HttpClient) { }

  ngOnInit() {

    timer(0, 10000).subscribe(x => {
    return this.http.get('https://mongojiva.openebs.ci/api/pod/status')
      .subscribe(data => {
        console.log(data)
        this.mongoOk = data;
        this.mongoStatus = this.mongoOk.status;
      });
  });
  timer(0, 10000).subscribe(x => {
    return this.http.get('https://perconajiva.openebs.ci/api/pod/status')
      .subscribe(data => {
        console.log(data)
        this.perconaOk = data;
        this.perconaStatus = this.perconaOk.status;
      });
  });
}
}
