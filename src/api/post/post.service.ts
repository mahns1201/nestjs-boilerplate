import { Injectable } from '@nestjs/common';

@Injectable()
export class PostService {
  createPost(): string {
    return 'Create post';
  }
}
