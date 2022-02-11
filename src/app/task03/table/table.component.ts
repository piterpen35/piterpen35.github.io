import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input()
  set newTask(task: string) {
    if(task) {
      this.taskArray.push({name: task, status: false});
      this.sendCount();
    }
  }
  @Output() sendCountOfTasks = new EventEmitter<number>();
  @Output() sendEdit = new EventEmitter<number>();

  public taskArray: Array<{
    name: string,
    status: boolean
  }> = [
    {name: 'HTML5', status: true},
    {name: 'CSS3', status: true},
    {name: 'SCSS', status: false},
    {name: 'JavaScript', status: false},
    {name: 'jQuerry', status: false},
    {name: 'Angular', status: false}
  ];

  constructor() { }

  ngOnInit(): void {
    this.sendCount();
  }

  sendCount(): void {
    this.sendCountOfTasks.emit(this.taskArray.length);
  }

  changeStatus(index: number): void {
    this.taskArray[index].status = !this.taskArray[index].status;
  }

  editTask(index: number): void {
    this.sendEdit.emit(index);
  }

  deleteTask(index: number): void {
    this.taskArray.splice(index, 1);
    this.sendCount();
  }

}
