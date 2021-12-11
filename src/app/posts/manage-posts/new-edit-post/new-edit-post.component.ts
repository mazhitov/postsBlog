import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../../../../shared/http.service';
import { Post } from '../../../../shared/post.model';

type PostBody = {
  title: string;
  dateCreated: string;
  description: string;
};

@Component({
  selector: 'app-new-edit-post',
  templateUrl: './new-edit-post.component.html',
  styleUrls: ['./new-edit-post.component.css']
})
export class NewEditPostComponent implements OnInit {
  headLineText = '';
  title = '';
  description= '';
  post: Post | undefined = undefined;
  postId = '';
  btnText = 'Save';
  constructor(private route: ActivatedRoute,
              private router: Router,
              private httpService: HttpService,
              ) {}

  ngOnInit(): void {
    this.addText();
    this.route.params.subscribe((params: Params) => {
      this.postId = params['id'];
      this.addText();
      this.httpService.getData().subscribe(posts => {
        this.post = posts.find(post => post.id === this.postId);
        if(this.post) {
          this.title = this.post!.title;
          this.description = this.post!.description;
        }
      })
    });
  }

  addText() {
    if (this.postId) {
      this.headLineText = 'Update fields';
      this.btnText = 'Save';
    } else {
      this.headLineText = 'Add new post'
      this.btnText = 'Add';
    }
  }


  onSubmit() {
    if (this.postId) {
      const body:PostBody = {title:this.title, dateCreated: this.post!.dateCreated, description:this.description};
      this.httpService.updateData(body, this.postId);
    } else {
      const date = new Date;
      const body: PostBody = {title: this.title, dateCreated: date.toString(), description: this.description};
      this.httpService.postData(body);
    }
    void this.router.navigate(['/posts']);
  }
}
