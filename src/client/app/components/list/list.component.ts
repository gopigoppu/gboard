import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  isAddList = false;
  boardId: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(res => {
      this.boardId = res.id;
      console.log(this.boardId);
    });
  }

  addNewList() {
    console.log('addNewList');
    this.isAddList = !this.isAddList;
  }

  addList(list) {
    console.log(list.list);
    if (!list.list) {
      return;
    }
    this.isAddList = !this.isAddList;
  }

  removeList() {
    console.log('removeList');
    this.isAddList = !this.isAddList;
  }

}
