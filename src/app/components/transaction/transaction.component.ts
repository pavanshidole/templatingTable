import { Component } from "@angular/core";
import { Itransaction } from "src/app/modules/transactions";

@Component({
    selector:"app-transaction",
    templateUrl:"./transaction.component.html",
    styleUrls:["./transaction.component.scss"],
})


export class TransactionComponent{
    transactions:Array<Itransaction> = [
        { id: 501, type: "Deposit", amount: 1000, date: "2023-12-01" },
        { id: 502, type: "Withdrawal", amount: 200, date: "2023-12-03" },
        { id: 503, type: "Transfer", amount: 500, date: "2023-12-05" }
      ];
}