import { Counterpart } from './counterpart';
import { TransactionType, getTransactionTypeInfo } from './transaction-type';
import { Category } from './category';
import { LoanType } from './loan-type';
import { Account } from './account';

export class Transaction {
    id: number;
    transactionTypeId: TransactionType;
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
