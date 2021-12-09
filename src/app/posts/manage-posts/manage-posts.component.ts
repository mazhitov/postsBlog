import { Component, OnInit } from '@angular/core';
import { Post } from '../../../shared/post.model';
import { HttpService } from '../../../shared/http.service';

@Component({
  selector: 'app-manage-posts',
  templateUrl: './manage-posts.component.html',
  styleUrls: ['./manage-posts.component.css']
})
export class ManagePostsComponent implements OnInit {
  posts:Post[] = [];

  constructor(private httpService: HttpService) {}

  ngOnInit() {
    this.getData();
    this.httpService.postsChange.subscribe(() => {
        this.getData();
    });
  }

  getData() {
    this.httpService.getData().subscribe(posts => {
      this.posts = posts;
    });
  }
}
