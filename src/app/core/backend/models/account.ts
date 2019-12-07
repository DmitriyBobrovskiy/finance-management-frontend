import { AccountType } from './account-type';
import { Currency } from './currency';

export class Account {
    id: number;
    title: string;
    accountType: AccountType;
    currency: Currency;
}
