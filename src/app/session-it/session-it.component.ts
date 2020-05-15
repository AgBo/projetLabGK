import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-session-it',
  templateUrl: './session-it.component.html',
  styleUrls: ['./session-it.component.css']
})
export class SessionItComponent implements OnInit {
  //name = "Formation Web";
  alignement = "right";
  couleur = "red";
  @Input() session: any;
  @Output() participantsChange = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }

  inscrire() {
    //this.session.name = "Formation web avancée";
    this.session.participants++;
    console.log("Nouvelle inscription" + this.session.participants + " Participants");
    this.participantsChange.emit({
      value: this.session.participants
    });
    if (this.session.participants >= 20) {
      this.session.isCompleted = true;
    }
  }
}
