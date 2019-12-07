import { Counterpart } from './counterpart';
import { TransactionType } from './transaction-type';
import { Category } from './category';
import { LoanType } from './loan-type';

export class Transaction {
    id: number;
    transactionTypeId: number;
    transactionType: TransactionType;
    date: Date;
    amount: number;
    counterpartId: number;
    counterpart: Counterpart;
    accountId: number;
    account: Account;
    categoryId: number;
    category: Category;
    description: string;
    loanTypeId: number;
    loanType: LoanType;
}