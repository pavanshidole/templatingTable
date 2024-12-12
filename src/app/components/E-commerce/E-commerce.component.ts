import { Component } from "@angular/core";
import { Iproducts } from "src/app/modules/E-commerce";


@Component({
    selector:"app-E-commerce",
    templateUrl:"./E-commerce.component.html",
    styleUrls:["./E-commerce.component.scss"],
})


export class EcommoerceComponent{
    products:Array<Iproducts> = [
        { id: 1, name: "Laptop", price: 999.99, category: "Electronics", stock: 50 },
        { id: 2, name: "Coffee Maker", price: 49.99, category: "Appliances", stock: 100 },
        { id: 3, name: "Desk Chair", price: 149.99, category: "Furniture", stock: 30 }
      ];
      
}