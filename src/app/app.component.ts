import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'state';
  private status:any;
  private ok:any;

  constructor(private http: HttpClient) { }
 
  ngOnInit() {
    return this.http.get('https://mongojiva.test.openebs.io/api/pod/status')
    .subscribe(data =>{
      console.log(data)
      this.ok= data;
      this.status = this.ok.status;
      console.log(this.ok.status)
    });


  }
}
