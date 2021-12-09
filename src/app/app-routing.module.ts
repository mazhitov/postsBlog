import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsComponent } from './posts/posts.component';
import { NotFoundComponent } from './not-found.component';

const routes: Routes = [
  {path: '',component: PostsComponent},
  {path: 'posts',component: PostsComponent, children:[
      {path: '',component: PostsComponent},
    ]},
  {path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
