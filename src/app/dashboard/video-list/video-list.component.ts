import { Component, OnInit } from '@angular/core';
import { videos } from 'src/app/app.constants';
import { Video } from 'src/types';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.scss']
})
export class VideoListComponent implements OnInit {

  videos: Video[] = videos;

  getVideoThumbnailUrl = (video: Video) => `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`;

  constructor() { }

  ngOnInit() {
  }

}
