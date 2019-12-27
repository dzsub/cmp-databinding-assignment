import { Component, OnInit, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  nInterval;
  num = 0;
  @Output() startGame = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  startBtn() {
    this.nInterval = setInterval(() => {
      this.num++;
      this.startGame.emit(this.num);
    }, 1000);
    
  }

  stopBtn() {
    clearInterval(this.nInterval);
  }

}
