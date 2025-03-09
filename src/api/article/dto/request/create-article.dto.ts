import { IsNotEmpty, IsString } from 'class-validator';
import { Article } from '../../article.entity';

export class CreateArticleDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  content: string;

  toEntity(): Article {
    const article = new Article();

    article.title = this.title;
    article.content = this.content;

    return article;
  }
}
