import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  artists: any[];

  constructor(private spotify: SpotifyService) {}

  ngOnInit(): void {}

  search(searchTerm: string) {
    console.log(searchTerm);
    this.spotify.getArtist(searchTerm).subscribe((data: any) => {
      console.log(data);
      this.artists = data;
    });
  }
}
