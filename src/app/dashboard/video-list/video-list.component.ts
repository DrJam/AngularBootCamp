import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
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

  constructor() { }

  ngOnInit() {
    // select first video
    this.selectVideo(this.videoData.find(() => true));
  }
}
