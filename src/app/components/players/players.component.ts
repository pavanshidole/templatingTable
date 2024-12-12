import { Component } from "@angular/core";
import { Iplayers } from "src/app/modules/players";

@Component({
    selector:"app-players",
    templateUrl:"./players.component.html",
    styleUrls:["./players.component.scss"],
})

export class PlayersComponent{
    players:Array<Iplayers> = [
        { id: 601, username: "GamerX", level: 50, score: 1200, online: true },
        { id: 602, username: "Shadow", level: 30, score: 800, online: false },
        { id: 603, username: "Firebird", level: 70, score: 1500, online: true }
      ];
}