import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.html',
  styleUrls: ['./todo-item.css']
})
export class TodoItem {
  @Input() task: string | null = null;
}
