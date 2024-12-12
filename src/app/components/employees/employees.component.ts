import { Component } from "@angular/core";
import { Iemployess } from "src/app/modules/empolyees";


@Component({
    selector:"app-employees",
    templateUrl:"./employees.component.html",
    styleUrls:["./employees.component.scss"],
})


export class EmployeesComponent{
    employees:Array<Iemployess> = [
        { id: 101, name: "Alice Johnson", position: "Developer", salary: 75000, department: "IT" },
        { id: 102, name: "Bob Smith", position: "HR Manager", salary: 60000, department: "HR" },
        { id: 103, name: "Charlie Brown", position: "Sales Executive", salary: 55000, department: "Sales" }
      ];
}