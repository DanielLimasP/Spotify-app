import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  newSongs: any[] = [];
  loading: boolean;
  error: boolean;
  errorMsg: string;

  constructor(private spotify: SpotifyService) {
    this.loading = true;
    this.error = false;
    this.spotify.getNewReleases().subscribe(
      (data: any) => {
        this.newSongs = data;
        this.loading = false;
      },
      (serviceError) => {
        this.loading = false;
        this.error = true;
        console.log(serviceError.error.error.message);
        this.errorMsg = serviceError.error.error.message;
      }
    );
  }

  ngOnInit(): void {}
}
