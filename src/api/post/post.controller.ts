import { Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { PostService } from './post.service';

@Controller('posts')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  createPost(): string {
    return this.postService.createPost();
  }
}
