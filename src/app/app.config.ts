import { Injectable } from '@angular/core';

export class Paths {
    private server = 'http://192.168.0.106:63732/';

    transactions = `${this.server}api/transactions`;
    transactionTypes = `${this.server}api/transactionTypes`;
}

@Injectable()
export class Configuration {
    paths = new Paths();
}
