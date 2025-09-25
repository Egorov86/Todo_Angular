import { Component } from '@angular/core';
import { TodoItem } from '../todo-item/todo-item';
import { TodoForm } from '../todo-form/todo-form';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.html',
  styleUrls: ['./todos.css'],
  imports: [CommonModule, TodoItem, TodoForm]
})
export class Todos {
  tasks: string[] = [];

  addTask(task: string) {
    console.log("Задача добавлена:", task); // Сообщение в консоли
    this.tasks.push(task); // Добавляем задачу в массив
  }

  deleteTask(index: number) {
    this.tasks.splice(index, 1); // Удаляем задачу по указанному индексу
  }
}