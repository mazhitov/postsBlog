import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { map } from 'rxjs/operators';
import { Post } from './post.model';

@Injectable()
export class HttpService {
  @Output() postsChange = new EventEmitter<Post[]>();

  constructor(private http: HttpClient) {}


  getData() {
    return this.http.get<{ [id: string]: Post }>('https://project-server-788da-default-rtdb.firebaseio.com/posts.json')
      .pipe(map(result => {
        if (result === null) return [];
        return Object.keys(result).map(id => {
          const post = result[id];
          return new Post(id, post.title, post.dateCreated, post.description);
        });
      }))
  }
  deletePost(id:string) {
    this.http.delete('https://project-server-788da-default-rtdb.firebaseio.com/posts/'+id+'.json').subscribe();
    this.postsChange.emit();
  }
}
