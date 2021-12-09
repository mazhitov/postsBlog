import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Post } from './post.model';

@Injectable()
export class HttpService {
  constructor(private http: HttpClient) {
  }

  getData() {
    return this.http.get<{ [id: string]: Post }>('https://project-server-788da-default-rtdb.firebaseio.com/posts.json')
      .pipe(map(result => {
        return Object.keys(result).map(id => {
          const post = result[id];
          return new Post(id, post.title, post.date, post.description);
        });
      }))
  }
}
