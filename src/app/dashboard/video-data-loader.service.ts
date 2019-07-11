import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Video } from 'src/types';
import { DomSanitizer } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VideoDataLoaderService {
  constructor(private http: HttpClient, private sanitizer: DomSanitizer) { }

  private addVideoUrls(videos: Video[]): Video[] {
    return videos.map(video => {
      video.thumbnailUrl = `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`;
      video.embedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${video.id}`);
      return video;
    });
  }

  loadVideoData(): Observable<Video[]> {
    return this.http
      .get<Video[]>('https://api.angularbootcamp.com/videos')
      .pipe(map(videos => this.addVideoUrls(videos)));
  }
}
