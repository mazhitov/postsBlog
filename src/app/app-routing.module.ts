import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsComponent } from './posts/posts.component';
import { NotFoundComponent } from './not-found.component';
import { ManagePostsComponent } from './posts/manage-posts/manage-posts.component';
import { PostDetailsComponent } from './posts/manage-posts/post-details/post-details.component';
import { EmptyPostDetailComponent } from './posts/manage-posts/empty-post-detail.component';
import { NewEditPostComponent } from './posts/manage-posts/new-edit-post/new-edit-post.component';
import { AboutComponent } from './about/about.component';
import { AboutEditComponent } from './about/about-edit.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ContactEditComponent } from './contacts/contact-edit/contact-edit.component';

const routes: Routes = [
  {path: '',component: PostsComponent},
  {path: 'posts',component: ManagePostsComponent, children:[
      {path: '',component: EmptyPostDetailComponent},
      {path: 'add',component: NewEditPostComponent},
      {path: ':id',component: PostDetailsComponent},
      {path: ':id/edit',component: NewEditPostComponent},
    ]},
  {path: 'about', component: AboutComponent, children: [
      {path: 'edit', component: AboutEditComponent}
    ]},
  {path: 'contacts', component: ContactsComponent, children: [
      {path: 'edit', component: ContactEditComponent}
    ]},
  {path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
