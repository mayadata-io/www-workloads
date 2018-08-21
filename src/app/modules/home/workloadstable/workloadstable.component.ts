import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
    return this.http.get('https://mongojiva.test.openebs.io/api/pod/status')
      .subscribe(data => {
        console.log(data)
        this.ok = data;
        this.status = this.ok.status;
      });
  }

}
