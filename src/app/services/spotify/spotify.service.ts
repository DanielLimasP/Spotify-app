import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  constructor(private http: HttpClient) {
    console.log('Spotify service ready');
  }

  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQBdTCHOisghS0FkLTt0f8rr2JdywOpqhHe13UZUs_IDTrk7WURRmyTi23Gw3oTYi-b1B1bPRWU2mAXEMms',
    });

    return this.http.get(url, { headers });
  }

  getNewReleases() {
    return this.getQuery('browse/new-releases?limit=20').pipe(
      map((data) => data['albums'].items)
    );
  }

  getArtist(searchTerm: string) {
    return this.getQuery(`search?q=${searchTerm}&type=artist&limit=15`).pipe(
      map((data) => data['artists'].items)
    );
  }
}
