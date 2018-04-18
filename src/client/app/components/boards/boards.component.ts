import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html',
  styleUrls: ['./boards.component.scss']
})
export class BoardsComponent implements OnInit {

  showCreateBoardPopup = false;

  constructor() { }

  ngOnInit() {
  }

  createBoard(boardName) {
    console.log(boardName);
    this.showCreateBoardPopup = !this.showCreateBoardPopup;
  }

}
