import { Component, OnInit } from '@angular/core';
import { Video } from 'src/types';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-video-dashboard',
  templateUrl: './video-dashboard.component.html',
  styleUrls: ['./video-dashboard.component.scss']
})
export class VideoDashboardComponent implements OnInit {
  selectedVideo: Video;
  videoData: Array<Video> = [];

  videoSelected = (video: Video) => {
    this.selectedVideo = video;
  }

  initialiseVideos = (videos: Video[]) => {
    // initialise thumbnails
    videos.forEach(video => {
      video.thumbnailUrl = `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`;
      video.embedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${video.id}`);
      this.videoData.push(video);
    });

    // select first video
    this.selectedVideo = this.videoData.find(() => true);
  }

  constructor(private sanitizer: DomSanitizer, private http: HttpClient) {
  }

  ngOnInit() {
    this.http
      .get<Video[]>('https://api.angularbootcamp.com/videos')
      .subscribe(this.initialiseVideos);
  }
}
