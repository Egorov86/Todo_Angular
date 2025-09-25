import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Les1Tmpl } from './les1-tmpl/les1-tmpl';
import { Todos } from './todos/todos';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TodoForm } from "./todo-form/todo-form";
import { TodoItem } from "./todo-item/todo-item";

@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule, RouterOutlet, Les1Tmpl, Todos], // Остались только основные компоненты
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('PV_318_Angular');
}
