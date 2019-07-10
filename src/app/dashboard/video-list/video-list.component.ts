import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Video } from 'src/types';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.scss']
})
export class VideoListComponent implements OnInit {
  @Input() videoData: Array<Video>;
  @Input() selectedVideo: Video;
  @Output() videoSelected = new EventEmitter<Video>();

  selectVideo = (video: Video) => this.videoSelected.emit(video);

  constructor() { }

  ngOnInit() { }
}
