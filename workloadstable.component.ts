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
  mongocstorStatus: any;
  mongocstorOk: any;
  perconacstorStatus: any;
  perconacstorOk: any;
  prometheusStatus: any;
  prometheusOk: any;
  grafanaStatus: any;
  grafanaOk: any;
  cockroachStatus: any;
  cockroachOk: any;
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
  timer(0, 10000).subscribe(x => {
    return this.http.get('https://mongocstor.openebs.ci/api/pod/status')
      .subscribe(data => {
        console.log(data)
        this.mongocstorOk = data;
        this.mongocstorStatus = this.mongocstorOk.status;
      });
  });
  timer(0, 10000).subscribe(x => {
    return this.http.get('https://perconacstor.openebs.ci/api/pod/status')
      .subscribe(data => {
        console.log(data)
        this.perconacstorOk = data;
        this.perconacstorStatus = this.perconacstorOk.status;
      });
  });
  timer(0, 10000).subscribe(x => {
    return this.http.get('https://prometheus.openebs.ci/api/pod/status')
      .subscribe(data => {
        console.log(data)
        this.prometheusOk = data;
        this.prometheusStatus = this.prometheusOk.status;
      });
  });
  timer(0, 10000).subscribe(x => {
    return this.http.get('https://grafana.openebs.ci/api/pod/status')
      .subscribe(data => {
        console.log(data)
        this.grafanaOk = data;
        this.grafanaStatus = this.grafanaOk.status;
      });
  });
  timer(0, 10000).subscribe(x => {
    return this.http.get('https://cockroachjiva.openebs.ci/api/pod/status')
      .subscribe(data => {
        console.log(data)
        this.cockroachOk = data;
        this.cockroachStatus = this.cockroachOk.status;
      });
  });
}
}
