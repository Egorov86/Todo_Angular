import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-form',
  imports: [FormsModule],
  templateUrl: './todo-form.html',
  styleUrls: ['./todo-form.css']
})
export class TodoForm {
  inputValue = '';

  @Output()
  onAdd = new EventEmitter<string>();

  handleSubmit(event: any) {
    event.preventDefault();
    const value = this.inputValue.trim();
    if (value !== '') {
      this.onAdd.emit(value);
      this.inputValue = '';
    }
  }
}