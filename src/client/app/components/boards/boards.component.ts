import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../shared/api.service';
import { AuthService } from '../../shared/auth/auth.service';

@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html',
  styleUrls: ['./boards.component.scss']
})
export class BoardsComponent implements OnInit {

  showCreateBoardPopup = false;
  boards: any;

  constructor(private apiService: ApiService, private authService: AuthService) { }

  ngOnInit() {
    this.apiService.get('boards').subscribe(data => {
      console.log(data);
      this.boards = data;
    });

  }

  createBoard(boardName) {
    console.log(boardName);
    this.showCreateBoardPopup = !this.showCreateBoardPopup;
    const board = {
      board: boardName,
      user: this.authService.getUsername(),
      userid: this.authService.getUserId()
    };

    this.apiService.createBoard(board).subscribe((result: any) => {
      console.log(result);
      this.boards.push(result);
    });
  }

}
