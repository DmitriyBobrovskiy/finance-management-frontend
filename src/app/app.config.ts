import { Injectable } from '@angular/core';

export class Paths {
    private server = 'http://192.168.0.106:63732/';

    transactions = `${this.server}api/transactions`;
    transactionTypes = `${this.server}api/transactionTypes`;
    categories = `${this.server}api/categories`;
    accounts = `${this.server}api/accounts`;
    counterparts = `${this.server}api/counterparts`;
}

export class Timeouts {
    loading = 10000;
}

@Injectable()
export class Configuration {
    paths = new Paths();
    timeouts = new Timeouts();

    verifyAuth = false;
}
