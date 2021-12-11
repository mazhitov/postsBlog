import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { map } from 'rxjs/operators';
import { Post } from './post.model';

type PostBody = {
  title: string;
  dateCreated: string;
  description: string;
};

@Injectable()
export class HttpService {
  @Output() postsChange = new EventEmitter();
  @Output() aboutChange = new EventEmitter();

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

  updateData(post:PostBody, id:string) {
    this.http.put('https://project-server-788da-default-rtdb.firebaseio.com/posts/'+id+'.json', post)
      .subscribe(() => {
        this.postsChange.emit();
      });
  }

  postData(post: PostBody) {
   this.http.post('https://project-server-788da-default-rtdb.firebaseio.com/posts.json', post).subscribe(
      () => { this.postsChange.emit();}
    );
  }

  deletePost(id:string) {
    this.http.delete('https://project-server-788da-default-rtdb.firebaseio.com/posts/'+id+'.json')
      .subscribe(() => {
        this.postsChange.emit();
      });
  }

  getAboutData(){
    return this.http.get('https://project-server-788da-default-rtdb.firebaseio.com/about.json');
  }
  updateAboutData(description:{}) {
    this.http.put('https://project-server-788da-default-rtdb.firebaseio.com/about.json', description).subscribe(
      () => {
        this.aboutChange.emit();
      });
  }
}
