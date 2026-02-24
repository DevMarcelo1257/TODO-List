import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TodoService } from '../../services/todo.service';
import { signal } from '@angular/core';


@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './todo.html',
  styleUrl: './todo.css'
})
export class Todo implements OnInit {

  todos = signal<any[]>([]);
  newTitle: string = '';

  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.loadTodos();
  }

  loadTodos() {
  this.todoService.getTodos()
    .subscribe((data: any[]) => {
      this.todos.set(data);
    });
}

 addTodo() {
  if (!this.newTitle.trim()) return;

 this.todoService.createTodo({ title: this.newTitle })
  .subscribe((createdTodo: any) => {
    this.todos.update(t => [...t, createdTodo]);
    this.newTitle = '';
  });
}

deleteTodo(id: number) {
  this.todoService.deleteTodo(id)
    .subscribe(() => {
      this.todos.update(t => t.filter(todo => todo.id !== id));
    });
}
}
