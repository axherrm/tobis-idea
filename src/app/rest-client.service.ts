import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";

import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RestClientService {
  private http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
  }

  vote(username: string, vote: string) {
    const params = new HttpParams()
      .set('voter', username)
      .set('voted', vote);
    const url = environment.api.baseURL + "vote";
    return this.http.post(url, {}, {
      params: params,
      responseType: "json",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      }
    });
  }

  async fetchResults() {
    return this.http.get<Results>('TODO');
  }

  async reset() {
    return this.http.post('TODO', {});
  }
}

export type Results = {
  results: {
    participant: {
      name: string
      votes: string[]
    }
  }[]
}
