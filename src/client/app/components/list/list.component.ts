import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  isAddList = false;

  constructor() { }

  ngOnInit() {
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
