import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subscription, Observable, timer } from 'rxjs';

@Component({
  selector: 'app-workloadstable',
  templateUrl: './workloadstable.component.html',
  styleUrls: ['./workloadstable.component.scss']
})
export class WorkloadstableComponent implements OnInit {
  status: any;
  ok: any;
  constructor(private http: HttpClient) { }

  ngOnInit() {

    timer(0, 10000).subscribe(x => {
    return this.http.get('https://mongojiva.openebs.ci/api/pod/status')
      .subscribe(data => {
        console.log(data)
        this.ok = data;
        this.status = this.ok.status;
      });
  });
  
}
}
