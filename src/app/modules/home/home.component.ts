import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public heroTexts = {
    heroText: "Workload Summary Dashboard",
    subText: [
       "Summary dashboard of stateful",
       "workloads running in openEBS volumes"
    ]
  };
  constructor() { }

  ngOnInit() {

  }

}
