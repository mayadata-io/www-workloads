import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


import { GithubService } from './core/http/githubapi/github.service';
import { BannerComponent } from './shared/components/banner/banner.component';
import { HomeComponent } from './modules/home/home.component';
import { HeroComponent } from './modules/home/hero/hero.component';
import { WorkloadstableComponent } from './modules/home/workloadstable/workloadstable.component'


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BannerComponent,
    HomeComponent,
    HeroComponent,
    WorkloadstableComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    NgbModule.forRoot()
  ],
  providers: [
    HttpClient,
    GithubService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
