import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  constructor() {}

  getUser(id: number) {
    return { id, name: 'John Doe' };
  }
}
