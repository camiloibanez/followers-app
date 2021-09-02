import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GithubFollowersService {
  private url = 'https://api.github.com/users/camiloibanez/followers';

  constructor(private http: HttpClient) { }

  getFollowers() {
    return this.http.get(this.url);
  }
}
