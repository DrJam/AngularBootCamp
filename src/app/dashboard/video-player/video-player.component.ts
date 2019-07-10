import { Component, OnInit, Input } from '@angular/core';
import { Video } from 'src/types';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss']
})
export class VideoPlayerComponent implements OnInit {
  @Input() selectedVideo: Video;

  constructor() { }

  ngOnInit() {
  }

}
