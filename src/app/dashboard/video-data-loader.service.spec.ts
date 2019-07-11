import { TestBed } from '@angular/core/testing';

import { VideoDataLoaderService } from './video-data-loader.service';

describe('VideoDataLoaderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VideoDataLoaderService = TestBed.get(VideoDataLoaderService);
    expect(service).toBeTruthy();
  });
});
