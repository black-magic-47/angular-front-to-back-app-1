import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { Post } from '../../models/Post';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: Post[];
  currentPost: Post = {
    id: 0,
    title: '',
    body: ''
  };
  isEdit: Boolean = false;
  constructor(private postService: PostService) { }

  ngOnInit() {
    this.postService.getPosts().subscribe(data => {
      this.posts = data;
    });
  }

  onNewPost = (e) => {
    this.posts.unshift(e as Post);
  }

  onUpdatedPost = (post: Post) => {
    this.posts.forEach((curr, index) => {
      if (post.id === curr.id) {
          this.posts.splice(index, 1);
          this.posts.unshift(post);
          this.isEdit = false;
      }
    });
  }

  editPost = (post: Post) => {
    this.currentPost = post;
    this.isEdit = true;
  }

}
