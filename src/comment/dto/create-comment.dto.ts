import { Store } from 'src/store/entities/store.entity';
import { User } from 'src/user/entities/user.entity';

export class CreateCommentDto {
  user: User;
  store: Store;
  note: number | null;
}
