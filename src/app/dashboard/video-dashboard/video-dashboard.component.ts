import { Component, OnInit } from '@angular/core';
import { Video } from 'src/types';
import { videos } from 'src/app/app.constants';
import { DomSanitizer } from '@angular/platform-browser';

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

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
    // initialise thumbnails
    this.videoData.forEach(video => {
      video.thumbnailUrl = `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`;
      video.embedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${video.id}`);
    });

    // select first video
    this.selectedVideo = this.videoData.find(() => true);
  }
}
