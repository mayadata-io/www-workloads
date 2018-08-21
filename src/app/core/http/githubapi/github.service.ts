import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { gitStargazers } from '../../../shared/model/github.model'

@Injectable({ 
  providedIn: 'root'
})
export class GithubService {
  private client_id = "22a163cc1bea27bf35b0";
  private client_secret = "46f00f30bb4e5413bdbaa1367c114b7b63c9a41d";
  private owner = "openebs";
  private repo = "openebs";

  baseUrl = "https://api.github.com/";
  constructor(private http: HttpClient) { }

  getTotalStargazers() {
    return this.http.get<gitStargazers>('https://api.github.com/repos/' + this.owner + "/" + this.repo + "?client_id=" + this.client_id + "&client_secret=" + this.client_secret)
  }

}
