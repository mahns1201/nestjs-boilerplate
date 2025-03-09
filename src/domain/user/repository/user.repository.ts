export abstract class UserRepository<T> {
  abstract create(user: T): Promise<T>;

  abstract findById(id: number): Promise<T | null>;
}
