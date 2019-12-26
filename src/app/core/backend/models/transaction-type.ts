export enum TransactionType {
    Expense = 1,
    Income = 2,
    Transfer = 3,
    Debt = 4
}

export class TransactionTypeInfo {
    title: string;
    icon: string;
    transactionType: TransactionType;

    constructor(transactionType: TransactionType) {
        this.transactionType = transactionType;
        switch (transactionType) {
            case TransactionType.Expense:
                this.title = 'Expense';
                this.icon = 'fas fa-minus';
                break;
            case TransactionType.Income:
                this.title = 'Income';
                this.icon = 'fas fa-plus';
                break;
            case TransactionType.Transfer:
                this.title = 'Transfer';
                this.icon = 'fas fa-exchange-alt';
                break;
            case TransactionType.Debt:
                this.title = 'Debt';
                this.icon = 'fas fa-comments-dollar';
                break;
        }
    }
}

export function getTransactionTypeInfo(transactionType: TransactionType) {
    return new TransactionTypeInfo(transactionType);
}
