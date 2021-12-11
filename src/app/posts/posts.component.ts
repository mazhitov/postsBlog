import { Component, OnInit } from '@angular/core';
import { Post } from '../../shared/post.model';
import { HttpService } from '../../shared/http.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts:Post[] = [];
  loading = false;
  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.loading = true;
    this.httpService.getData().subscribe(posts => {
      this.posts = posts;
      this.loading = false;
    });
  }

}
