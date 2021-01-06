import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify/spotify.service';
@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css'],
})
export class ArtistComponent implements OnInit {
  artist: any;
  loadingArtist: boolean;

  constructor(private router: ActivatedRoute, private spotify: SpotifyService) {
    this.loadingArtist = true;
    this.router.params.subscribe((params) => {
      this.getArtist(params['id']);
    });
  }

  ngOnInit(): void {}

  getArtist(id: string) {
    this.loadingArtist;
    this.spotify.getArtist(id).subscribe((artist) => {
      console.log(artist);
      this.artist = artist;
      this.loadingArtist = false;
    });
  }
}
