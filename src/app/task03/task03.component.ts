import { Component, OnInit, ViewChild } from '@angular/core';
import { TableComponent } from './table/table.component';

@Component({
  selector: 'app-task03',
  templateUrl: './task03.component.html',
  styleUrls: ['./task03.component.scss']
})
export class Task03Component implements OnInit {
  @ViewChild(TableComponent) childTable!: TableComponent;

  public userName = 'Ivan Ivanov';
  public taskCount = 0;
  public taskName = '';
  public sendName!: string;
  public isEdit = false;
  public newTaskName = '';
  public indexEdit!: number;

  constructor() { }

  ngOnInit(): void {
  }

  getCount(count: number): void {
    this.taskCount = count;
  }

  addTask (): void {
    this.sendName = this.taskName;
    this.taskName = '';
  }

  getIndex(index: number): void {
    this.isEdit = true;
    this.newTaskName = this.childTable.taskArray[index].name;
    this.indexEdit = index;
  }

  updateTask(): void {
    this.childTable.taskArray[this.indexEdit].name = this.newTaskName;
    this.newTaskName = '';
    this.isEdit = false;
  }

}
