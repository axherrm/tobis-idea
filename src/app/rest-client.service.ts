import {inject, Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class RestClientService {
  private http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
  }

  async vote(username: string, vote: string) {
    const params = new HttpParams()
      .set('username', username)
      .set('vote', vote);
    return this.http.post('TODO', {}, {params: params});
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
