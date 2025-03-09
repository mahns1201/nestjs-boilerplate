import { Injectable } from '@nestjs/common';
import { ArticleRepository } from './article.repository';
import { Article } from './article.entity';
import { CreateArticleDto } from './dto/request/create-article.dto';

@Injectable()
export class ArticleService {
  constructor(private readonly articleRepository: ArticleRepository) {}

  async createArticle(createArticleDto: CreateArticleDto): Promise<Article> {
    return await this.articleRepository.create(createArticleDto.toEntity());
  }
}
