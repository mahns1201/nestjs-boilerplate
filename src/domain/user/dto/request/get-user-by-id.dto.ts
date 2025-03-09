import { IsNumber } from 'class-validator';

export class GetUserByIdDto {
  @IsNumber()
  id: number;
}
