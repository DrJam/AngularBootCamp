import { Component, OnInit } from '@angular/core';
import { Video } from 'src/types';
import { videos } from 'src/app/app.constants';

@Component({
  selector: 'app-video-dashboard',
  templateUrl: './video-dashboard.component.html',
  styleUrls: ['./video-dashboard.component.scss']
})
export class VideoDashboardComponent implements OnInit {
  selectedVideo: Video;
  videoData: Array<Video> = videos;

  videoSelected = (video: Video) => {
    this.selectedVideo = video;
  }

  constructor() { }

  ngOnInit() { }
}
