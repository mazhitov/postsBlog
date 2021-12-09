import { Component, OnInit } from '@angular/core';
import { Post } from '../../../../shared/post.model';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../../../../shared/http.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {
  post!: Post | undefined;
  modalOpen = false;
  postId = '';
  constructor(private route: ActivatedRoute,
              private router: Router,
              private httpService: HttpService,
              ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.postId = params['id'];

      this.httpService.getData().subscribe(posts => {
        this.post = posts.find(post => post.id === this.postId);
      })
    });
  }

  openCheckOutModal() {
    this.modalOpen = true;
  }

  closeCheckoutModal() {
    this.modalOpen = false;
  }

  onDeletePost() {
    this.httpService.deletePost(this.postId);
    void this.router.navigate(['/posts']);
  }
}
