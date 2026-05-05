import { Reader } from '../models/Reader';
import { Copy } from '../models/Copy';

export class BorrowService {
    public borrow(reader: Reader, copy: Copy): boolean {
        if (copy.isCopyAvailable()) {
            copy.setAvailable(false);
            reader.borrowCopy(copy);
            return true;
        }
        return false;
    }

    public returnBook(reader: Reader, copy: Copy): void {
        copy.setAvailable(true);
        reader.returnCopy(copy);
    }
}
