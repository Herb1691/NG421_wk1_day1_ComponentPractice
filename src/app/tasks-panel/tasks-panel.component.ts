import { Component, OnInit } from '@angular/core';
import taskList from '../tasks';

@Component({
  selector: 'app-tasks-panel',
  templateUrl: './tasks-panel.component.html',
  styleUrls: ['./tasks-panel.component.css']
})
export class TasksPanelComponent implements OnInit {

  tasks: Array<any> = [];
  constructor() { }

  ngOnInit() {
    this.tasks = taskList;
  }

}
