import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';


@Injectable({
  providedIn: 'root'
})
export class DownloaderService {
  download(arg0: string) {
    throw new Error('Method not implemented.');
  }

  constructor(private http:HttpClient) { }

  sampledownloader(): Observable<Blob> {
    return this.http.get("https://api.easypdfcloud.com/v1/jobs/00000000000CB20D/output/sample%20file.pdf?type=file HTTP/1.1"
    , {
      responseType: 'blob'
    })
  }
  
}
