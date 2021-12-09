import { Component, OnInit } from '@angular/core';
import { Post } from '../../../../shared/post.model';
import { ActivatedRoute, Params } from '@angular/router';
import { HttpService } from '../../../../shared/http.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {
  post!: Post|undefined;

  constructor(private route: ActivatedRoute, private httpService: HttpService) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const postId = params['id'];

      this.httpService.getData().subscribe(posts => {
        this.post = posts.find(post => post.id === postId);
      })
    });
  }

  onDeletePost() {

  }
}
