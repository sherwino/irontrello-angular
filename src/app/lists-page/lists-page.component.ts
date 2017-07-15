import { Component, OnInit } from '@angular/core';

import { ListService } from '../services/list.service';

@Component({
  selector: 'app-lists-page',
  templateUrl: './lists-page.component.html',
  styleUrls: ['./lists-page.component.css']
})
export class ListsPageComponent implements OnInit {
  myLists: any[] = [];

  constructor(
    private listThang: ListService
  ) { }

  ngOnInit() {
      this.listThang.lists()
        .then((listsFromApi) => {
            this.myLists = listsFromApi;
        })
        .catch((errResponse) => {
            alert('List error 🐋');
        });
  }

}
