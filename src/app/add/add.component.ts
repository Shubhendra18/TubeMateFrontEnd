import { Component, OnInit } from '@angular/core';
import { VideoServiceService } from '../video-service.service';
import { Video } from '../VideoClass';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styles: []
})
export class AddComponent implements OnInit {

  private objVideo: Video;
  msg: string = "Video Added Successfully..!";
  isAdded: boolean = false;
  constructor(private q: VideoServiceService) { }

  ngOnInit() {

  }
  AddVideo = function (vd) {
    this.objVideo = {
      "Title": vd.Title,
      "Path": vd.Path,
      "Des": vd.Des,
    }
    this.q.AddNewVideo(this.objVideo).subscribe(
      data => {
        this.isAdded = true;
      }
    )
  }
}
