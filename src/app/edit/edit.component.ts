import { Component, OnInit } from '@angular/core';
import { VideoServiceService } from '../video-service.service';
import { Video } from '../VideoClass';
import { Router } from '@angular/router'

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styles: []
})
export class EditComponent implements OnInit {
  constructor(private q: VideoServiceService,private route:Router) { }

  ngOnInit() {
    this.q.GetVideoById();
  }
  _id = this.q.GetVideoById()._id;
  Title = this.q.GetVideoById().Title;
  Path = this.q.GetVideoById().Path;
  Des = this.q.GetVideoById().Des;


  update = function (vd) {
    this.objVideo = {
      "Title": vd.Title,
      "_id": vd._id,
      "Path": vd.Path,
      "Des": vd.Des
    }
   this.q.UpdateVideo(this.objVideo).subscribe(
     success=>{
    this.route.navigate(['/Update']);
     }
   );
  }

}
