import { SafeResourceUrl } from "@angular/platform-browser";

export interface Video {
  title: string;
  author: string;
  id: string;
  thumbnailUrl?: string;
  embedUrl?: SafeResourceUrl;
  viewDetails: ViewDetail[];
}

interface ViewDetail {
  age: number;
  region: string;
  date: string;
}
