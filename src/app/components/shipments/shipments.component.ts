import { Component } from "@angular/core";
import { Ishipments } from "src/app/modules/shipments";

@Component({
    selector:"app-shipments",
    templateUrl:"./shipments.component.html",
    styleUrls:["./shipments.component.scss"],
})

export class ShipmentsComponent{
    shipments : Array<Ishipments> = [
        { id: 401, origin: "New York", destination: "San Francisco", status: "In Transit" },
        { id: 402, origin: "Chicago", destination: "Los Angeles", status: "Delivered" },
        { id: 403, origin: "Houston", destination: "Seattle", status: "Pending" }
      ];
}