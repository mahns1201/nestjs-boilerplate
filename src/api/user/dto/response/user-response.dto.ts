import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class UserResponseDto {
  private readonly _id: number;
  private readonly _name: string;

  constructor(guest: { id: number; name: string }) {
    this._id = guest.id;
    this._name = guest.name;
  }

  @Expose()
  get id(): number {
    return this._id;
  }

  @Expose()
  get name(): string {
    return this._name;
  }
}
