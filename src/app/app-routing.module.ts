import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsComponent } from './posts/posts.component';
import { NotFoundComponent } from './not-found.component';
import { ManagePostsComponent } from './posts/manage-posts/manage-posts.component';
import { PostDetailsComponent } from './posts/manage-posts/post-details/post-details.component';
import { EmptyPostDetailComponent } from './posts/manage-posts/empty-post-detail.component';

const routes: Routes = [
  {path: '',component: PostsComponent},
  {path: 'posts',component: ManagePostsComponent, children:[
      {path: '',component: EmptyPostDetailComponent},
      {path: ':id',component: PostDetailsComponent},
      // {path: 'add',component: PostsComponent},
    ]},
  {path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
