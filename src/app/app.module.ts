import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { PostsComponent } from './posts/posts.component';
import { PostComponent } from './posts/post/post.component';
import { HttpService } from '../shared/http.service';
import { HttpClientModule } from '@angular/common/http';
import { ManagePostsComponent } from './posts/manage-posts/manage-posts.component';
import { NotFoundComponent } from './not-found.component';
import { PostDetailsComponent } from './posts/manage-posts/post-details/post-details.component';
import { EmptyPostDetailComponent } from './posts/manage-posts/empty-post-detail.component';
import { ModalComponent } from './ui/modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    PostsComponent,
    PostComponent,
    ManagePostsComponent,
    NotFoundComponent,
    PostDetailsComponent,
    EmptyPostDetailComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
