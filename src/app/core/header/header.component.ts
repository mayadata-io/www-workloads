import { Component, OnInit } from '@angular/core';
import { GithubService } from '../http/githubapi/github.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public starCount
  constructor(private githubStar:GithubService) { }

  ngOnInit() {
 
    this.githubStar.getTotalStargazers().subscribe( res => {
      this.starCount= res.stargazers_count;
    });
  }

}
