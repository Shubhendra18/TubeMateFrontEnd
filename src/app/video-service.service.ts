import { Injectable } from '@angular/core';
import { Video } from './VideoClass';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class VideoServiceService {
  private baseUri: string = "http://localhost:8080";
  private headers = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private _http: HttpClient) { }
  AddNewVideo(objVideo: Video) {
    return this._http.post(this.baseUri + '/create', objVideo, { headers: this.headers })
  }
  GetAllVideo() {
    return this._http.get(this.baseUri + '/read', { headers: this.headers })
  }
  UpdateVideo(objVideo: Video) {
    return this._http.put(this.baseUri + '/update', objVideo, { headers: this.headers })
  }
  DeleteVideo(id: string) {
    return this._http.delete(this.baseUri + '/delete/' + id, { headers: this.headers })
  }

  
  private updateVideo: Video;
  FetchVideoById(objVideo: Video) {
    this.updateVideo = objVideo;

  }
  GetVideoById() {
    return this.updateVideo;
  }
}
