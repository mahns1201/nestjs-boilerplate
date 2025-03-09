export abstract class UserRepository<T> {
  abstract findById(id: number): Promise<T | null>;
}
