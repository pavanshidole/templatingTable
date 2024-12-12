import { Component } from "@angular/core";
import { Istudents } from "src/app/modules/students";

@Component({
    selector:"app-students",
    templateUrl:"./students.component.html",
    styleUrls:["./students.component.scss"],
})

export class StudentsComponent{
    students:Array<Istudents> = [
        { id: 301, name: "Emily White", grade: "A", enrolled: true },
        { id: 302, name: "Michael Green", grade: "B", enrolled: true },
        { id: 303, name: "Sarah Black", grade: "C", enrolled: false }
      ];
}