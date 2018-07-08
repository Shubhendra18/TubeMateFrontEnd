import { Component, OnInit } from '@angular/core';
import { VideoServiceService } from '../video-service.service';
import { Video } from '../VideoClass';
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styles: []
})
export class ViewComponent implements OnInit {

  private objVideo: Video;
  constructor(private q: VideoServiceService) { }
  ngOnInit() {
    this.GetVideo();
  }
  GetVideo() {
    this.q.GetAllVideo().subscribe(
      data => {
        this.objVideo = data['msg'];
      }
    )
  }
}
