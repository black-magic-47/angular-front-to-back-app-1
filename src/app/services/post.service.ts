import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Post } from '../models/Post';

@Injectable()
export class PostService {

  postURL = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private httpClient: HttpClient) { }

  getPosts = (): Observable<Post[]> => {
      return this.httpClient.get<Post[]>(this.postURL);
  }

  savePost = (post: Post): Observable<Post> => {
    return this.httpClient.post<Post>(this.postURL, post);
  }

  updatePost = (post: Post): Observable<Post> => {
    return this.httpClient.put<Post>(this.postURL + '/' + post.id, post);
  }

  deletePost = (id: Number): Observable<any> => {
    return this.httpClient.delete<any>(this.postURL + '/' + id);
  }
}
