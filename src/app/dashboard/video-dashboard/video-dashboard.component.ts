import { Component, OnInit } from '@angular/core';
import { Video } from 'src/types';
import { Observable } from 'rxjs';
import { VideoDataLoaderService } from '../video-data-loader.service';

@Component({
  selector: 'app-video-dashboard',
  templateUrl: './video-dashboard.component.html',
  styleUrls: ['./video-dashboard.component.scss']
})
export class VideoDashboardComponent implements OnInit {
  selectedVideo: Video;
  videoData: Observable<Video[]>;

  videoSelected = (video: Video) => {
    this.selectedVideo = video;
  }


  constructor(videoDataLoaderService: VideoDataLoaderService) {
    this.videoData = videoDataLoaderService.loadVideoData();
  }

  ngOnInit() {
    this.videoData.subscribe(videos => this.selectedVideo = videos.find(() => true));
  }
}
