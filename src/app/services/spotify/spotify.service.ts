import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  token: string =
    'BQDaSteh4zGfUAlL5YgHEqzpHvfg7Yo5O2VfRLcHkf3rhO579SlZF-nrFN4CXEMQf7rhJfF25w1ETDW81Bs';

  constructor(private http: HttpClient) {
    console.log('Spotify service ready');
  }

  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`,
    });

    return this.http.get(url, { headers });
  }

  getNewReleases() {
    return this.getQuery('browse/new-releases?limit=20').pipe(
      map((data) => data['albums'].items)
    );
  }

  getArtists(searchTerm: string) {
    return this.getQuery(`search?q=${searchTerm}&type=artist&limit=15`).pipe(
      map((data) => data['artists'].items)
    );
  }

  getArtist(id: string) {
    return this.getQuery(`artists/${id}`).pipe(map((data) => data));
  }

  getTopTracks(id: string) {
    return this.getQuery(`artists/${id}/top-tracks?country=us`).pipe(
      map((data) => data['tracks'])
    );
  }
}
