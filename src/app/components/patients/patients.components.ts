import { Component } from "@angular/core";
import { Ipatients } from "src/app/modules/patients";



@Component({
    selector:"app-patients",
    templateUrl:"./patients.component.html",
    styleUrls:["./patients.component.scss"],
})


export class PatientsComponents{
    patients:Array<Ipatients> = [
        { id: 201, name: "John Doe", age: 45, condition: "Diabetes", admitted: true },
        { id: 202, name: "Jane Roe", age: 30, condition: "Flu", admitted: false },
        { id: 203, name: "Mark Spencer", age: 65, condition: "Hypertension", admitted: true }
      ];
}