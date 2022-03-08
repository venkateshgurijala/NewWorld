import { Component, OnInit } from '@angular/core';
import { DownloaderService } from 'src/app/services/download/downloader.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  constructor(private downloads:DownloaderService) { }
   dowloadFunction(){
     this.downloads
  }
  // download(): void {
  //   this.downloads()
  //   .subscribe(blob => {
  //       const a = document.createElement('a')
  //       const objectUrl = URL.createObjectURL(blob)
  //       a.href = objectUrl
  //       a.download = 'archive.zip';
  //       a.click();
  //       URL.revokeObjectURL(objectUrl);
  //     })
  // }
  ngOnInit(): void {
  }

}
