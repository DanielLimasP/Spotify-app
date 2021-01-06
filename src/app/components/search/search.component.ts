import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  artists: any[];
  loading: boolean;

  constructor(private spotify: SpotifyService) {
    this.loading = false;
  }

  ngOnInit(): void {}

  search(searchTerm: string) {
    console.log(searchTerm);
    this.loading = true;
    this.spotify.getArtists(searchTerm).subscribe((data: any) => {
      console.log(data);
      this.artists = data;
      this.loading = false;
    });
  }
}
