import { ɵDEFAULT_LOCALE_ID } from '@angular/core';

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

    constructor(
        transactionType: TransactionType,
        locale: string = ɵDEFAULT_LOCALE_ID) {
        this.transactionType = transactionType;
        switch (locale) {
            case 'ru':
                switch (transactionType) {
                    case TransactionType.Expense: this.title = 'Расход'; break;
                    case TransactionType.Income: this.title = 'Доход'; break;
                    case TransactionType.Transfer: this.title = 'Перевод'; break;
                    case TransactionType.Debt: this.title = 'Долг'; break;
                }
                break;
            default:
                switch (transactionType) {
                    case TransactionType.Expense: this.title = 'Expense'; break;
                    case TransactionType.Income: this.title = 'Income'; break;
                    case TransactionType.Transfer: this.title = 'Transfer'; break;
                    case TransactionType.Debt: this.title = 'Debt'; break;
                }
                break;
        }
        switch (transactionType) {
            case TransactionType.Expense: this.icon = 'fas fa-minus'; break;
            case TransactionType.Income: this.icon = 'fas fa-plus'; break;
            case TransactionType.Transfer: this.icon = 'fas fa-exchange-alt'; break;
            case TransactionType.Debt: this.icon = 'fas fa-comments-dollar'; break;
        }
    }
}

export function getTransactionTypeInfo(
    transactionType: TransactionType,
    locale: string = ɵDEFAULT_LOCALE_ID) {
    return new TransactionTypeInfo(transactionType, locale);
}
