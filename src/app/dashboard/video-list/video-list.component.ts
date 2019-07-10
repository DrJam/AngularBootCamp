import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Video } from 'src/types';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.scss']
})
export class VideoListComponent implements OnInit {
  @Input() videoData: Array<Video>;
  @Output() videoSelected = new EventEmitter<Video>();

  selectedVideo: Video = undefined;

  selectVideo = (video: Video) => {
    this.selectedVideo = video;
    this.videoSelected.emit(video);
  }

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
    // initialise thumbnails
    this.videoData.forEach(video => {
      video.thumbnailUrl = `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`;
      const embedUrl = `https://www.youtube.com/embed/${video.id}`;
      video.embedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(embedUrl);
    });

    // select first video
    this.selectVideo(this.videoData.find(() => true));
  }
}
